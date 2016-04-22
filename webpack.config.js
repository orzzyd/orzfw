var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './public/js/index/index.js',
    entry: {
        index: './public/js/index/index.js',
        magic: './public/js/magic/magic.js'
        // todoList: './public/js/todoList/todoList.js'
    },
    output: {
        publicPath: '/dist/',
        path: './public/dist',
        filename: '[name].bundle.[hash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Hello Magic!',
            template: './views/magic/magic.html',
            filename: 'template/magic.html',
            chunks: ['magic'],
            inject: 'body'
        }),
        new htmlWebpackPlugin({
            title: 'Hello Index!',
            template: './views/index/index.html',
            filename: 'template/index.html',
            chunks: ['index'],
            inject: 'body'
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=10240&name=image/[name].[hash:8].[ext]'
            }
        ]
    }
}