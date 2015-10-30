/**
 * Created by vvliebe on 15/10/29.
 */

var webpack = require('webpack');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: "",
        filename: "spa.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: /node_modules/},
            { test: /\.scss$/, loader: "style!css!autoprefixer!sass", exclude: /node_modules/ },
            { test: /\.css$/, loader: "style!css!autoprefixer", exclude: /node_modules/ }
        ]
    }
    //, plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        compress: {
    //            warnings: false
    //        }
    //    })
    //]
};
