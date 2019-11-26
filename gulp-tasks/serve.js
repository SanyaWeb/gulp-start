import gulp from "gulp";
import browsersync from "browser-sync";
import {scripts, styles, views, images, webp, spritesPNG} from "../gulpfile.babel";

function serve() {
    browsersync.init({
        baseDir: "./build",
        server: "./build/",
        port: 4000,
        notify: true
    });
    gulp.watch(["./src/css/**/*.css", "./src/blocks/**/*.css"], styles);
    gulp.watch(["./src/js/**/*.js", "./src/blocks/**/*.js"], scripts);
    gulp.watch(["./src/views/**/*.html", "./src/blocks/**/*.html"], views);
    gulp.watch("./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}", images);
    gulp.watch("./src/img/**/*.{jpg,jpeg,png,gif,svg,tiff}", webp);
    gulp.watch("./src/icons/png/*.png", spritesPNG);

}

gulp.task("serve", serve);