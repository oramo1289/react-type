const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

console.log('Hola');
console.log(path.resolve(__dirname));
console.log(path.resolve(__dirname, 'src', 'index.jsx'));
console.log(path.join(__dirname, 'src', 'index.jsx'));
console.log(path.resolve(__dirname, 'public', 'index.html'));
console.log(path.join(__dirname, 'public', 'index.html'));
module.exports = {
    entry: './src/index.jsx', //the file to be used at first once Webpack starts to work.
    output: {
        filename: 'bundle.js', // the file to be exported by the Webpack process.
        path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
    resolve: {
        extensions: ['.js', '.jsx'] //the file extensions to be used by Webpack.
    },
    module: {
        rules: [ // the rules Webpack will use when it works on the files
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
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
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, 'public', 'index.html')
            }
        )
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8888
    }
};