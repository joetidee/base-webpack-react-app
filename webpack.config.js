// hack for Ubuntu on Windows
try {
    require('os').networkInterfaces();
}
catch (e) {
    require('os').networkInterfaces = () => ({});
}

const path = require('path');
const webpack = require("webpack");

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
	entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/app/index.js'
    ],
    module: {
        rules: [{
            test: /\.js?$/,
            use: ['babel-loader'],
            exclude: /node_modules/
        },{
            test: /\.jsx?$/,
            use: ['babel-loader?' + JSON.stringify({
                presets: ["es2015", "stage-2", "react"]
            })],
            exclude: /node_modules/
        },{
            test: /\.css?$/,
            use: ['style-loader','css-loader']
        },{
            test: /\.jpg?$/,
            use: ['file-loader?name=[path][name].[ext]?[hash]']
        },{
            test: /\.ico$/,
            use: ["file-loader"]
        },{
            test: /\.png$/,
            use: ["url-loader?limit=100000"]
        },{
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            use: ["url-loader?limit=10000&mimetype=application/font-woff"]
        },{
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            use: ["url-loader"]
        },{
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            use: ["file-loader"]
        },{
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            use: ["url-loader?limit=10000&mimetype=image/svg+xml"]
        }]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            "$":"jquery",
            "jQuery":"jquery",
            'global.jQuery': 'jquery'
        }),
        new webpack.DefinePlugin({ 'typeof window': '\"object\"' }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    }
};