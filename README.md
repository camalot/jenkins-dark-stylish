# jenkins-dark [![Build status](https://ci.appveyor.com/api/projects/status/14lnufroy4v83xjk?svg=true)](https://ci.appveyor.com/project/camalot/jenkins-dark-stylish)
A theme for Jenkins to give a dark look.

```
NOTE: Tested with both Jenkins version 1.6xx+ and 2.x (some things on 2.x are not styled properly yet.)
```

You will need to add the domains that you want this to apply to yourself if you use the Stylish plugin.

## How to install

### Simple Theme Jenkins Plugin (auto-updated)
- Install the [Simple Theme Plugin](https://wiki.jenkins-ci.org/display/JENKINS/Simple+Theme+Plugin) on your Jenkins Server
- Click `Manage Jenkins`
- Click `Configure System` and scroll to `Theme` section
- Specify the URL of `http://camalot.github.io/jenkins-dark-stylish/jenkins-dark.min.css` for the CSS
- Click `Save`
- Profit!

### Native Jenkins Plugin
- Download the [latest  release hpi file](https://github.com/camalot/jenkins-dark-stylish/releases/latest)
- Go to `Jenkins -> Manage Jenkins -> Manage Plugins -> Advanced`
- Go to the `Upload Plugin` section
- Select the `hpi` file you downloaded
- Click `Upload`
- Restart Jenkins
- Profit!

### Stylish

_NOTE: these steps may be slightly different for FireFox version of Stylish_

- Install Stylish:
 - [Chrome][stylish-chrome]
 - [Firefox][stylish-firefox]
- Download the [latest release zip](https://github.com/camalot/jenkins-dark-stylish/releases/latest)
- Extract to a known location
- Open the Stylish Style Manager (`Manage installed styles`)
- Click on `Write new Style`
- Under `Mozilla Format`, Click on `Import` button
- Select the `jenkins-dark.css` file that you extracted earlier
- Add your domains that you want this to apply to
- Profit!

### Install the plugin via chef and the [jenkins-cookbook](https://supermarket.chef.io/cookbooks/jenkins)

```
jenkins_dark_theme_version = '1.0.105'
jenkins_dark_source = "https://github.com/camalot/jenkins-dark-stylish/releases/download/jenkins-dark-stylish-#{jenkins_dark_theme_version}/jenkins-dark-stylish-#{jenkins_dark_theme_version}.hpi"

jenkins_plugin 'jenkins-dark-theme' do
  action [:install]
  source jenkins_dark_source
end
```
- Profit!


## Screenshots

![Jenkins Menu](http://i.imgur.com/7nL7lLg.png)

![Script Console](http://i.imgur.com/cMfkrb1.png)

![Build Queue](http://i.imgur.com/2HqsYla.png)

![Manage Jenkins](http://i.imgur.com/KpxsHl4.png)

![Login](http://i.imgur.com/6uUYuTI.png)

![Manage Plugins](http://i.imgur.com/yTTJ6qO.png)

![Dashboard](http://i.imgur.com/YKBxbHm.png)

![Legend](http://i.imgur.com/v9N0oVT.png)

## How to build

```
$ npm install
$ grunt
```

This will generate the following:
  - dist/jenkins-dark.css
  - dist/jenkins-dark.min.css

## How to contribute

- Fork the _Jenkins-Dark-Stylish_ repository
- Clone the repository
- Create a new branch (eg. `feature/style-menus`)
- Create a pull request into `develop`



[unit-tests]: https://github.com/jamesshore/quixote

[stylish-chrome]: https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en
[stylish-firefox]: https://addons.mozilla.org/en-US/firefox/addon/stylish/
