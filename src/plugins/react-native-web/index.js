module.exports = function() {
  return {
    name: 'custom-docusaurus-plugin',
    configureWebpack(config) {
      return {
        ...config,
        resolve: {
          alias: {
            'react-native$': 'react-native-web',
          },
        },
      };
    },
  };
};
