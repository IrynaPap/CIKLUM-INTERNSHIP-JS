var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        // publicPath: '/assets/',
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'] },
            { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded&sourceMap' },
            { test: /\.css$/, exclude: /node_modules/, loader: 'style!css-loader?modules&importLoaders=1&sourceMap&localIdentName=[local]___[hash:base64:5]' },
            { test: /\.(png|jpg|gif|svg)$/, loader: "url-loader" },
            { test: /\.(eot|ttf|woff)$/, loader: "url-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('bundle.css')
    ]
};