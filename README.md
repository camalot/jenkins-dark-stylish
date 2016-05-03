# jenkins-dark [![Build status](https://ci.appveyor.com/api/projects/status/14lnufroy4v83xjk?svg=true)](https://ci.appveyor.com/project/camalot/jenkins-dark-stylish)
A stylish for Jenkins to give a dark theme

You will need to add the domains that you want this to apply to yourself.

```
 @-moz-document domain("my-jenkins-ci-host.com") { ... }
```

## How to install

- Download the latest release
- Extract to a known location
- Open the `css` file in your text editor of choice
- Modify the `@-moz-document` line to contain the domains you want to apply this to
 -  `@-moz-document domain("my-jenkins-ci-host.com") { ... }`
- Save the changes
- Open the Stylish Style Manager (_Manage installed styles._)
- Click on _Write new Style_
- Under _Mozilla Format_, Click on _Import_ button
- Select the `jenkins-dark.css` file that you extracted earlier
- Profit!

## Screenshots

![Jenkins Menu](http://i.imgur.com/Tuk4X2J.png)

![Script Console](http://i.imgur.com/cMfkrb1.png)

![Build Queue](http://i.imgur.com/3XI4Ssc.png)

![Manage Jenkins](http://i.imgur.com/KpxsHl4.png)

![Manage Plugins](http://i.imgur.com/yTTJ6qO.png)

![Dashboard](http://i.imgur.com/7UA0UQf.png)
