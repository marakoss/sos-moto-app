# SOS MOTO APP

Find help on the road, quickly

[![CodeFactor](https://www.codefactor.io/repository/github/marakoss/sos-moto-app/badge/master)](https://www.codefactor.io/repository/github/marakoss/sos-moto-app/overview/master)
[![Known Vulnerabilities](https://snyk.io/test/github/marakoss/sos-moto-app/badge.svg)](https://snyk.io/test/github/marakoss/sos-moto-app/)

SOS MOTO is a mobile application written in React Native that allows you to call a nearest contact from your GPS location to get a quick help. We have over 10k active users in Europe and steadily growing.

![SOS Moto Application - by Motorcyclist to Motorcyclicts](media/sosmoto-app-overview.png)

### Dependencies

-   Node 16 (`nvm use 16`)
-   Expo cli
-   Backend Service to load data (not included)

### IOS

-   Autolinking doesn't work in ios so you must manually run:
    `cd ios`
    `npx pod install`
-   Build it done though xcode

### Android

-   Build it done though Android Studio
-   Increment versionCode before next upload to Google play

### Cache

.Env variables and others are cached. Clear cache by running
`yarn start -c`

### Debugging

-   Install react developer tools `yarn global add react-devtools`
-   Then run `react-devtools`.
-   Should automatically connect to debugging instances

### Code style

This project defines linting rules in .eslintsrc.js
run `yarn lint` to get current report

### Licence

This program and its components is proprietary, excluding the 3rd party libraries we rely on. Copying and modifying of the sources is prohibited for non-member users, so is building and ditributing the SOS Moto App from sources. Feel free to observe and learn from the sources. And if you wish to contribute to this community project, contact us at support@motosos.cz
