import gulp from "gulp";
import imageminWebp from "imagemin-webp";
import webp from "gulp-webp";
import browsersync from "browser-sync";

gulp.task("webp", () => {
    return gulp.src("./src/img/**/*.{jpg,jpeg,png,tiff}")
        .pipe(webp( imageminWebp({
            lossless: true,
            quality: 100,
            alphaQuality: 100
        })))
        .pipe(gulp.dest("./build/img"))
        .on("end", browsersync.reload);
});