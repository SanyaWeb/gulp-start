import webpack from "webpack";
import webpackStream from "webpack-stream";
import gulp from "gulp";
import browsersync from "browser-sync";

const webpackConfig = require("../webpack.config.js");

const path = require("path");
const fs = require('fs');

const jsFolder = path.resolve(__dirname, "../src/js/");

const jsFiles = fs.readdirSync(jsFolder);

const entry = [];

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
};

jsFiles.forEach((item) => {
    if(isFile(path.join(jsFolder, item))) {
        entry.push(jsFolder + "/" + item);
    }
});

webpackConfig.mode = "production";
webpackConfig.devtool = false;

gulp.task("scripts", () => {
    return gulp.src(entry)
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest("./build/js"))
        .on("end", browsersync.reload);
});