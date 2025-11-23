module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // react-native-reanimated plugin is automatically added by babel-preset-expo
    // when react-native-reanimated is installed
  };
};

