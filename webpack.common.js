const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
    const isProd = env.production === "true";
    console.log('NODE_ENV: ', env.NODE_ENV);
    console.log('Production: ',isProd);
    console.log('Watch: ', !isProd);
    return {
        mode: env.production ? "production": "development",
        devtool: "cheap-module-eval-source-map",
        watch: !isProd, 
        entry: {
            home: './src/home'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './assets/')
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
                filename: '[name].css'
            })
        ],
    }
};

