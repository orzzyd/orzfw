var webpack = require('webpack')

module.exports = {
    // entry: './public/js/index/index.js',
    entry: {
        index: './public/js/index/index.js',
        magic: './public/js/magic/magic.js'
        // todoList: './public/js/todoList/todoList.js'
    },
    output: {
        publicPath: '/dist/',
        path: './public/dist/',
        filename: '[name].bundle.js'
    },
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