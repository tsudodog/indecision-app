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
            }
        ]
    }
};

// loader how files get transformed by WebPack

