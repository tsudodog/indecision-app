//entry point app.js in src
const path = require('path');
console.log(__dirname);

// where to output
module.exports = {
    entry : './src/app.js'
    , output : {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader : 'babel-loader',
                test :  /\.js$/,
                exclude : /node_modules/
            }, 
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer : {
        contentBase: path.join(__dirname, 'public'),
        
    }
};

// loader how files get transformed by WebPack

