# # RN-Cli-Firebase (IoS + Android)

React Native CLI + Firebase (Android + IoS)
App with firebase auth + locale notifications :)

To log-in you will need account

Test account:
```
login: firebase@test.com
password: test123
```

after login-in notifications will be scheduled every 2 hours.

if you wanna try it on your phone (Android required) download this .apk file
https://drive.google.com/file/d/1Y2TXgi0Q0iJLFYRXm6gdPzRFRZK5Jnvz/view?usp=sharing

## Setup

`Node` is required to run this add

To setup app you need to run those commands in project's terminal:

```
npm install --global yarn
yarn
npx react-native link
```

## Running the project on android

```
yarn android
```

## Running the project on ios

```
npx pod-install
yarn ios
```

## Running the tests

```
yarn test
```

## Running the linter

```
yarn lint
```

## Build to download

https://drive.google.com/u/0/uc?id=1Y2TXgi0Q0iJLFYRXm6gdPzRFRZK5Jnvz&export=download
