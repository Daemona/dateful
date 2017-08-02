const path = require ('path');
const { CheckerPlugin } = require ('awesome-typescript-loader');

module.exports = {
    entry   : './src/factory.ts',
    output  : {
        path          : path.resolve (__dirname, 'dist'),
        filename      : 'index.js',
        library       : 'dateful',
        libraryTarget : 'umd'
    },
    resolve : {
        extensions : ['.ts', '.tsx', '.js', '.jsx']
    },
    devtool : 'source-map',
    module  : {
        loaders : [
            {
                test    : /\.tsx?$/,
                loader  : 'awesome-typescript-loader?declaration=true&outDir=src'
            }
        ]
    },
    plugins : [
        new CheckerPlugin ()
    ]
};