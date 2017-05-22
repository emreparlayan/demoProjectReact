var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var dconfig = {
    env: process.env.NODE_ENV || 'development',
}

var config = {
    devtool: 'source-map',
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: /App/,
                exclude: /node_modules/,
                use: [
                    "babel-loader?presets[]=es2015&presets[]=react",
                    "ts-loader"
                ]
            },
            {
                test: /(\.scss|\.css)$/,
                exclude: /App/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?sourceMap',
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /(\.scss|\.css)$/,
                include: /App/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader?sourceMap',
                        'postcss-loader'
                    ]
                })
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=10000&name=/fonts/[name].[ext]&mimetype=application/font-woff" },
            { test: /\.eot?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=10000&name=/fonts/[name].[ext]&mimetype=application/vnd.ms-fontobject" },
            { test: /\.[ot]tf?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=10000&name=/fonts/[name].[ext]&mimetype=application/octet-stream" },
            { test: /\.svg?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader?limit=10000&name=/fonts/[name].[ext]&mimetype=image/svg+xml" },
            {
                test: /\.(jpe?g|png|gif|bmp)$/,
                use: 'file-loader?limit=10000&name=/img/[name].[ext]'
            }
        ]
    },
    entry: {
        app: [path.join(__dirname, './App/App.tsx')]
    },
    output: {
        path: path.join(__dirname, 'wwwroot', 'dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'main.css' }),
        new webpack.LoaderOptionsPlugin({
            debug: true,
            options: { postcss: [autoprefixer] }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(dconfig.env)
            }
        })
    ]
}
module.exports = config;
