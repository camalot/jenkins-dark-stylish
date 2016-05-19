module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    var pkg = grunt.file.readJSON('package.json');

    grunt.initConfig({
      clean: {
          dist: {
              src: ["dist/*"]
          }
      },

      less: {
        dist: {
          options: {
             //paths: ["assets/css"]
          },
          files: {"dist/jenkins-dark.css": "jenkins-dark.less"}
        }
      },
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'dist/',
            src: ['*.css', '!*.min.css'],
            dest: 'dist/',
            ext: '.min.css'
          }]
        }
      },
      replace: {
          dist: {
              options: {
                  patterns: [{
                      match: /\${VERSION}/g,
                      replacement: pkg.version
                  }, {
                      match: /jenkins-dark-theme<\/artifactId>\s+<version>[^>]*<\/version>/g,
                      replacement: 'jenkins-dark-theme</artifactId>\n    <version>' + pkg.version + '</version>'
                  }]
              },
              files: [{
                  src: ['dist/jenkins-dark.css'],
                  dest: 'dist/jenkins-dark.css'
              }, {
                  src: ['plugin/pom.xml'],
                  dest: 'plugin/pom.xml'
              }]
          }
      },
      postcss: {
        options: {
            map: false,
            processors: [
                require('autoprefixer')({
                    browsers: 'last 2 versions'
                }), // add vendor prefixes
                require('postcss-encode-base64-inlined-images'),
                require('cssnano')() // minify the result
            ]
        },
        dist: {
          files: [{
              expand: true,
              cwd: 'dist/',
              src: ['*.css', '!*.min.css'],
              dest: 'dist/',
              ext: '.min.css'
          }]
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['clean', 'less', 'replace', 'cssmin', 'postcss']);
}
