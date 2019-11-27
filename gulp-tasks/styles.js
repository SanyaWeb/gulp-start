import gulp from "gulp";
import concat from "gulp-concat";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import browsersync from "browser-sync";

function commonStyles() {
    return gulp.src("./src/css/general.css")
        .pipe(autoprefixer())
        //.pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('./build/css'))
        .pipe(browsersync.stream());
}

function pageStyles() {
    return gulp.src("./src/css/page/*.css")
        .pipe(autoprefixer())
        //.pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('./build/css/page'))
        .pipe(browsersync.stream());
}

gulp.task("styles", gulp.series(commonStyles, pageStyles));