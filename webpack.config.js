const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const config = {
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        'test': /\.(ts|tsx)?$/,
        'loaders': ['babel-loader', 'ts-loader'],
        'exclude': [/node_modules/, nodeModulesPath]
      },
      {
        'test': /\.(jsx?)$/,
        'loaders': ['babel-loader'],
        'exclude': [/node_modules/, nodeModulesPath]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
    {
      from: './src/assets/images/',
      to: './images'
    }]),
  ],
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 4848,
  }
}

module.exports = config;
