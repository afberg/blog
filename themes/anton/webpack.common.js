const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: {
        index: './src/css/index.css'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist/')
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      hmr: true,
                    },
                },
                {
                    loader: 'css-loader',
                    options: {
                    importLoaders: 1
                    }
                },
                {
                    loader: 'postcss-loader'
                }
            ]
          }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
};

