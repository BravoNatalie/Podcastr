// const path = require('path');
// const withFonts = require('next-fonts');
// const withPlugins = require('next-compose-plugins');
// const transpileModules = require('next-transpile-modules');
// const withModules = transpileModules(['react-switch']);

// module.exports = withPlugins([withFonts, withModules], {
//   images: {
//     domains: ['storage.googleapis.com']
//   },

//   webpack(config) {
//     config.resolve.alias['react'] = path.resolve(__dirname, '.', 'node_modules', 'react');

//     return config;
//   }
// });

module.exports = {
  images: {
    domains: ['storage.googleapis.com']
  }
};