// const webpack = require('webpack')
const path = require('path')

// let NODE_ENV = 'production'
// if (process.env.NODE_ENV) {
//     NODE_ENV = process.env.NODE_ENV.replace(/^\s+|\s+$/g, "")
// }

module.exports = {
    entry: {
        index: './index.js',
        app: './ui/app/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            }
        ]
    },
    optimization: {
        minimize: true
    },
    mode: "production" // "development" | "production"
};