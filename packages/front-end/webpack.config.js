const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  const isProd = env.production;
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'sensei.bundle.js',
      chunkFilename: '[name].bundle.js',
    },
    devServer: {
      // open: true,
      hot: true,
      historyApiFallback: {
        index: '/'
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.tsx$/,
          enforce: 'pre',
          use: [
            {
              loader: 'tslint-loader',
              options: {
                emitErrors: true,
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        },
      ],
    },
    optimization: {
      minimize: isProd,
      splitChunks: {
        chunks: 'all',
      },
    },
    stats: {
      chunks: true,
      chunkModules: false
    },
    devtool: !isProd && 'inline-source-map',
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
  }
};