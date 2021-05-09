const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require("path")
const webpack = require("webpack")
module.exports = {
    mode: 'development',
    entry: './src/client/index.js',




module.exports = {
        entry: ['babel-polyfill', './test.js'],
      
        output: {
          filename: 'bundle.js'       
        },
      
        module: {
          loaders: [
            { test: /\.jsx?$/, loader: 'babel', }
          ]
        }
      };
    
//module: {
    //rules: [
          //  {
        //test: '/\.js$/',
        //exclude: /node_modules/,
        //loader: "babel-loader"
         //   }
   // ]
//},
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    }

    )
]

}