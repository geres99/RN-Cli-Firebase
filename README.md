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
yarn android
```

## Running the tests

```
yarn test
```

## Running the linter

```
yarn lint
```
