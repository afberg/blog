const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
    const isProd = env.production === "true";
    console.log('NODE_ENV: ', env.NODE_ENV);
    console.log('Production: ',isProd);
    return {
        mode: isProd ? "production": "development",
        devtool: isProd ? "" :"inline-source-map",
        watch: !isProd, 
        entry: {
            home: './src/home',
            base: './src/base',
            post: './src/post',

        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, './assets/')
        },
        resolve: {
            extensions: [".ts", ".js"]
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ],
            
        },
        plugins: [
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].css'
            })
        ],
    }
};

