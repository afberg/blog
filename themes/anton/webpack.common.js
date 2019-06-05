const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = env => {
    console.log('NODE_ENV: ', env.NODE_ENV);
    console.log('Production: ', env.production);
    return {
        mode: env.production ? "production": "development",
        entry: {
            home: './src/home'
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, './dist/')
        },
        module: {
            rules: [{
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
            }]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css'
            }),
        ],
    }
};

