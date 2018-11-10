const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/admin/index.jsx",
    output: {
        path: __dirname + "/dist",
        filename: "app.js"
    },
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
                //process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            template: './src/index.html', 
            filename: './index.html' 
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new StyleLintPlugin({
          configFile: '.stylelintrc',
          context: 'src/admin/sass',
          files: '*.scss',
          failOnError: false,
          quiet: false,
        }),
    ]
}; 
