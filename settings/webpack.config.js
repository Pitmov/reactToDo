/**
 * Created by Andrew on 03.05.2016.
 */
var precss       = require('precss');
var autoprefixer = require('autoprefixer');
module.exports = {
    entry: {
        app: ["./src/main.js"]
    },
    resolve: {
        modulesDirectories: [
            './src',
            './node_modules/'
        ]
    },
    output: {
        path: "./build/",
        publicPath: "/html/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    postcss: function () {
        return [precss, autoprefixer];
    }
};