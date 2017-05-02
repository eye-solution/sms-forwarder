# SMS Forwarder

## What's this app?
  This app is used for listening your SMSs and forwarding to a server.

## How to use
  Just run it, and keep it running in background   
  (make sure that you don't kill it).

## How to use modify it?
  Take a look at the <code>src/app/app.component.ts</code> file,  
  update <code>apiEndpoint</code> variable for your api end-point.

## Disclaimer
  This app need permission to access your SMS which can violate the privacy of users.  
  Please consider for using in commerce.

## Build Instruction

- Install Android Studio: https://developer.android.com/studio/install.html
- Install cordova & ionic
```bash
#install cordova
npm install -g cordova
#install ionic
npm install -g ionic
```

- Clone project & install dependencies
```bash
git clone https://github.com/eye-solution/sms-forwarder
cd sms
npm install
```
- Generate app icon and splash screen
```bash
# replace resources/icon.png with your icon
# replace resources/splash.png with your splash screen
ionic resources # generate multi sizes for icon/splash
```
