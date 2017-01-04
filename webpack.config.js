var path = require('path');
var webpack = require('webpack');

var DEVELOPMENT = process.env.NODE_ENV === 'development';
var PRODUCTION  = process.env.NODE_ENV === 'production';

var entry = DEVELOPMENT
           ?  [ path.join(__dirname , 'src' , 'index.js') ,
                'webpack/hot/dev-server',
                'webpack-dev-server/client?http://localhost:8080'
              ]
           : [
                path.join(__dirname , 'src' , 'index.js')
             ]; 

var plugins = DEVELOPMENT
              ? [new webpack.HotModuleReplacementPlugin()]
              : [ new webpack.optimize.UglifyJsPlugin({ // tree shaking and uglifying only for production environment
                  comments:true,
                  mangle:false,
                  compress: {
                      warnings: true
                  }
              })];
             

module.exports = {
devtool: 'source-map',    
entry:entry,
plugins: plugins,
module: {
    loaders:[{
        test:/\.js$/,
        loaders:['babel-loader'],
        exclude:'/node_modules/'
    }, {
        test:/\.(png|jpeg|gif)$/,
        loaders:['file-loader'],
        exclude:'/node_modules/'
    } , {
        test:/\.css$/,
        loaders:['style-loader' , 'css-loader'],
        exclude:'/node_modules/'
    }]
},
output: {
            path: path.join(__dirname , 'dist'),
            publicPath: '/dist/',
            filename: 'bundle.js'
        }


}