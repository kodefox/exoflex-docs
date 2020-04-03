module.exports = function() {
  return {
    name: 'react-native-web',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            'react-native$': 'react-native-web',
          },
        },
      };
    },
  };
};
