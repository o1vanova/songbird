const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                './src/assets/styles/common.scss',
                './src/assets/styles/flex.scss',
              ]
            },
          }
        ]
      },
      {
        test: /\.(wav|mp3)$/i,
        exclude: path.resolve(__dirname, 'src/assets/sounds'),
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'sounds/'
          }
        }]
      },
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
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets/images/',
        to: './images'
      },
      {
        from: './src/assets/sounds/',
        to: './sounds'
      }
    ]),
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
