var webpack = require('webpack')

module.exports = {
    // entry: './public/js/index/index.js',
    entry: {
        index: './public/js/index/index.js',
        magic: './public/js/magic/magic.js'
    },
    output: {
        path: './public/js-bundle/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    }
}