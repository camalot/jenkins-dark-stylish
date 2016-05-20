# jenkins-dark [![Build status](https://ci.appveyor.com/api/projects/status/14lnufroy4v83xjk?svg=true)](https://ci.appveyor.com/project/camalot/jenkins-dark-stylish)
A stylish for Jenkins to give a dark theme.

```
NOTE: This has not been tested with Jenkins 2.x.
```

You will need to add the domains that you want this to apply to yourself if you use the Stylish plugin.

## How to install

### Jenkins Plugin

- Download the [latest  release hpi file](https://github.com/camalot/jenkins-dark-stylish/releases/latest)
- Go to `Jenkins -> Manage Jenkins -> Manage Plugins`
- Go to the `Advanced` tab
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
$ npm install less
$ npm install less-plugin-clean-css
$ lessc --no-color --clean-css ./jenkins-dark.less ./dist/jenkins-dark.css
```


[stylish-chrome]: https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe?hl=en
[stylish-firefox]: https://addons.mozilla.org/en-US/firefox/addon/stylish/
