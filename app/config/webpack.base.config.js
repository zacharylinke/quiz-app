const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: "./src/index.jsx",
        resolve: {
          extensions: ['.js', '.jsx', '.json'],
        },
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              use: [
                  {
                      loader: "babel-loader",
                  },
                  {
                      loader: "eslint-loader",
                  },
              ]
            },
            {
              test: /\.scss$/,
              use: [
                // fallback to style-loader in development
                PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                "css-loader",
                "sass-loader"
              ]
            },
            {
              test: /\.css$/,
              use: [
              PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              'css-loader'
              ]
            },
          ],
        },
        plugins: [
          new WriteFilePlugin(),
          new CopyWebpackPlugin([ { from: 'src/static' } ]),
          new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            filename: './index.html' 
          }),
          new StyleLintPlugin({
            configFile: '.stylelintrc',
            context: 'src/admin/sass',
            files: '*.scss',
            failOnError: false,
            quiet: false,
          }),
          new webpack.DefinePlugin({ 
            'process.env.VERSION': JSON.stringify(env.VERSION),
            'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
        }),
      ],
    }
  ])
};
