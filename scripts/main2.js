var path = require('path');
var webpack = require('webpack');

var validate = require('webpack-validator');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var Merge = require('webpack-merge');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var PATHS = {
    libsPath: path.resolve(process.cwd(), './bower_components'),
    srcPath: path.resolve(process.cwd(), './'),
    node_modulesPath: path.resolve('./node_modules')
};

module.exports = {
    entry:{
        index: './scripts/main1.js',
        common: [
            path.join(PATHS.libsPath, "jquery/dist/jquery.js"),
            path.join(PATHS.libsPath, "bootstrap/dist/js/bootstrap.js")
        ]
    },
    output:{
        path: path.join(__dirname,'dist'),
        // publicPath: PATHS.publicPath,
        filename:'scripts/[name].js',
        chunkFilename: 'scripts/[name]-[chunkhash:8].js'
    },
    module:{
        loaders:[
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: 'url-loader',
                query: {
                    /*
                     *  limit=10000 ： 10kb
                     *  图片大小小于10kb 采用内联的形式，否则输出图片
                     * */
                    limit: 10000,
                    name: '/img/[name]-[hash:8].[ext]'
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader")
            }
        ]
    },
    resolve:{
        extensions: ['', '.js', '.css', '.scss', '.ejs', '.png', '.jpg'],
        root: [
            PATHS.node_modulesPath
        ],
        alias: {
            jquery:path.join(PATHS.libsPath, "/jquery/dist/jquery.js"),
            underscore: path.join(PATHS.libsPath, "/bootstrap/dist/js/bootstrap.js"),

            bootstrapcss: path.join(PATHS.libsPath, "/bootstrap/dist/css/bootstrap.css"),
            indexcss: path.join(PATHS.srcPath, "/styles/app.css"),
        },
        plugins:[
            new webpack.optimize.CommonsChunkPlugin(
                {name: "common", filename: "dist/common.js"}
            ),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                "_": "underscore"
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new CleanWebpackPlugin(['dist'], {
                root: '', // An absolute path for the root  of webpack.config.js
                verbose: true,// Write logs to console.
                dry: false // Do not delete anything, good for testing.
            })
        ]
    }
}