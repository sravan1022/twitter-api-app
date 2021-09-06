const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname,`src`,`app`),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    },
    resolve:{
        extensions: ['.js','.jsx','.css']
    },
    devServer:{
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'deploy'),
            publicPath:'/'            
        },
    },
    module:{
        rules:[{test:/\.jsx?/,use:'babel-loader',exclude:/node_modules/}, 
               {test:/\.css$/,use:'sass-loader',exclude:/node_modules/}]
    }
}