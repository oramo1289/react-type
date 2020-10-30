const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './src/index.tsx', //the file to be used at first once Webpack starts to work.
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js', // the file to be exported by the Webpack process.
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.tsx', '.ts','.js', '.jsx' ] //the file extensions to be used by Webpack.
    },
    module: {
        rules: [ // the rules Webpack will use when it works on the files
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: { modules: true }
                  },
                  'sass-loader'
                ]
            },
            {
                test: /\.html/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [//To make Webpack recognize and use this file
        // new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
        
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8888
    }
};