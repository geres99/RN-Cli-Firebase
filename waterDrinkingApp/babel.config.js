/* eslint-disable no-undef */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          api: './api',
          assets: './assets',
          components: './components',
          contexts: './contexts',
          hooks: './hooks',
          screens: './screens',
          setup: './setup',
          theme: './theme',
          utils: './utils',
          __mocks__: './__mocks__',
          firebaseconfig: './firebaseconfig',
        },
      },
    ],
  ],
};
