const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');

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
                    options: {
                        presets: ['env']
                    }
                },
                {
                    loader: "eslint-loader",
                },
            ]
        },
        {
            test: /\.scss$/,
            loaders: ExtractTextPlugin.extract('css-loader!sass-loader'), 

        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'css/admin.css',
            allChunks: true,
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
