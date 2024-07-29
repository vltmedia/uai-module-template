var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    CustomModule: './src/module/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].plugin.js',
    library: "CustomModule",
    libraryTarget:'window'
  },
  externals: {
    './vendor': 'vendor',
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      window: 'React'
    }
  },
  module : {
    rules : [
        {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
        }
    ]
  },
  optimization: {
    namedModules: true,
  },
};