# SOS MOTO APP #

React native Application for SOS Moto Group

### Dependencies ###

* Node 14 (`nvm use 14`)
* Expo cli
* Backend Service https://api.motoprerov.cz to load data

### IOS ###
- Autolinking doesn't work in ios so you must manually run:
```cd ios```
```npx pod install```
- Build it done though xcode

### Android ###
- Build it done though Android Studio
- Increment versionCode before next upload to Google play

### Cache ###
.Env variables and others are cached. Clear cache by running
```yarn start -c```


### Code style ###
This project defines linting rules in .eslintsrc.js
run ```yarn lint``` to get current report

