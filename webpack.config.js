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
    entry: {
        index1:'./scripts/main1.js',
        index3:'./scripts/main3.js',
        common:['jquery']
    },
    output: {
        filename: './dist/[name].js'
    },
    module: {
        loaders:[
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader','css-loader') },
            { test: /\.(png|gif|jpe?g)$/, loader: 'url-loader' },
            {
                test: /\.(eot|woff|woff2|ttf|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 5000,
                    name: './dist/font/[name]-[hash:8].[ext]'
                }
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css"),
        // new CleanWebpackPlugin(['dist'], {
        //     root: '', // An absolute path for the root  of webpack.config.js
        //     verbose: true,// Write logs to console.
        //     dry: false // Do not delete anything, good for testing.
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.ProvidePlugin({      // 只要有 Common 的提取，这块就不起作用
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin('common','./dist/common/common.js'),
        new HtmlWebpackPlugin({
            title:'edward-test',
            filename:'index.html',
            template: __dirname + '/tpl/template.html',
            inject:'body',
            //inject:true,    //允许插件修改哪些内容，包括head与body
            hash:true,    //为静态资源生成hash值
            minify:{    //压缩HTML文件
                removeComments:true,    //移除HTML中的注释
                collapseWhitespace:false    //删除空白符与换行符
            }
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ],
    resolve:{
        extensions: ['', '.js', '.css', '.scss', '.ejs', '.png', '.jpg'],
        alias:{
            bootstrapcss:path.join(PATHS.libsPath,'/bootstrap/dist/css/bootstrap.css')
        }
    }
};