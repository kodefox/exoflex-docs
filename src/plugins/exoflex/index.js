module.exports = function() {
  return {
    name: 'exoflex',
    configureWebpack() {
      return {
        module: {
          rules: [
            {
              test: /\.js$/,
              exclude: /node_modules[/\\](?!react-native-vector-icons|react-native-safe-area-view|react-native-multi-slider|react-native-calendars|react-native-collapsible)/,
              use: {
                loader: 'babel-loader',
                options: {
                  // Disable reading babel configuration
                  babelrc: false,
                  configFile: false,
                  // The configuration for compilation
                  presets: [
                    ['@babel/preset-env', {useBuiltIns: 'usage', corejs: 3}],
                    '@babel/preset-react',
                    '@babel/preset-flow',
                    '@babel/preset-typescript',
                  ],
                  plugins: [
                    '@babel/plugin-proposal-class-properties',
                    '@babel/plugin-proposal-object-rest-spread',
                  ],
                },
              },
            },
            {
              test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
              loader: 'file-loader',
            },
          ],
        },
      };
    },
  };
};
