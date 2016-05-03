# jenkins-dark [![Build status](https://ci.appveyor.com/api/projects/status/14lnufroy4v83xjk?svg=true)](https://ci.appveyor.com/project/camalot/jenkins-dark-stylish)
A stylish for Jenkins to give a dark theme

You will need to add the domains that you want this to apply to yourself.

```
 @-moz-document domain("jenkins-ci.org"), domain("my-ci-host.com"), domain("127.0.0.1:8080") {
```

## How to install

- Download the latest release
- Extract to a known location
- Open the `css` file in your text editor of choice
- Modify the `@-moz-document` line to contain the domains you want to apply this to
- Save the changes
- Open the Stylish Manager
 - [Chrome](chrome-extension://fjnbnpbmkenffdnngjfgmeleoegfcffe/manage.html)
- Click on Import
- Select the `jenkins-dark.css` file
- Profit!

## Screenshots

![Jenkins Menu](http://i.imgur.com/Tuk4X2J.png)

![Script Console](http://i.imgur.com/cMfkrb1.png)

![Build Queue](http://i.imgur.com/3XI4Ssc.png)

![Manage Jenkins](http://i.imgur.com/KpxsHl4.png)

![Manage Plugins](http://i.imgur.com/yTTJ6qO.png)
