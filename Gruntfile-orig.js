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
                files: {
                    "dist/jenkins-dark.css": "jenkins-dark.less"
                }
            }
        },

        // imageEmbed: {
        //     light: {
        //         src: ["dist/jenkins-dark.css"],
        //         dest: "dist/jenkins-dark.css",
        //         options: {
        //             deleteAfterEncoding: false
        //         }
        //     }
        // },

        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'release/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'release/css',
                    ext: '.min.css'
                }]
            }
        },
        imagemin: {
            dynamic: {
                options: {
                    svgoPlugins: [{
                        removeViewBox: true,
                        removeDoctype: true,
                        removeXMLProcInst: true,
                        removeComments: true,
                        removeMetadata: true,
                        removeTitle: true,
                        removeDesc: true,
                        removeUselessDefs: true,
                        removeEditorsNSData: true,
                        removeEmptyAttrs: true,
                        removeHiddenElems: true,
                        removeEmptyText: true,
                        removeEmptyContainers: true,
                        removeViewBox: true,
                        cleanUpEnableBackground: true,
                        minifyStyles: true,
                        convertStyleToAttrs: true,
                        convertColors: true,
                        convertPathData: true,
                        convertTransform: true,
                        removeUnknownsAndDefaults: true,
                        removeNonInheritableGroupAttrs: true,
                        removeUselessStrokeAndFill: true,
                        removeUnusedNS: true,
                        cleanupIDs: true,
                        cleanupNumericValues: true,
                        moveElemsAttrsToGroup: true,
                        moveGroupAttrsToElems: true,
                        collapseGroups: true,
                        removeRasterImages: true,
                        mergePaths: true,
                        convertShapeToPath: true,
                        sortAttrs: true,
                        transformsWithOnePath: true,
                        removeDimensions: true,
                        removeAttrs: true,
                        addClassesToSVGElement: true,
                        removeStyleElement: true
                    }]
                },
                files: [{
                    expand: true,
                    cwd: 'node_modules/jenkins-core-theme/images/',
                    src: ['**/*.svg'],
                    dest: 'node_modules/jenkins-core-theme/images/'
                }]
            }

        },

        replace: {
            dist: {
                options: {
                    patterns: [{
                        match: 'version',
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
                src: 'dist/jenkins-dark*.css'
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['clean', 'imagemin', 'less', 'replace', 'cssmin', 'postcss']);


};
