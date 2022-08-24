const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'BatmanUI',
            template: 'index.html'
        })
    ],
    // externals: {
    //     react: {
    //         commonjs: 'react',
    //         commonjs2: 'react',
    //         amd: 'react',
    //         root: 'React',
    //     }
    // }
})