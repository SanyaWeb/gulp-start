const path = require("path");
const fs = require('fs');

const jsFolder = path.resolve(__dirname, "./src/js/");

const jsFiles = fs.readdirSync(jsFolder);

const entry = {};

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
};

jsFiles.forEach((item) => {
    const parts = item.split('.');

    if(isFile(path.join(jsFolder, item))) {
        entry[parts[0]] = "./src/js/" + item;
    }
});
console.log(entry);
module.exports = {
    entry: entry,
    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: require.resolve("babel-loader"),
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: false }]
                        ]
                    }
                }
            }
        ]
    },

};