import gulp from "gulp";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import browsersync from "browser-sync";

const jsFiles = [
    "./src/js/*.js"
];

function scripts() {
    return gulp.src("./src/js/*.js")
        .pipe(concat("scripts.js"))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browsersync.stream());
}

gulp.task("scripts", scripts);