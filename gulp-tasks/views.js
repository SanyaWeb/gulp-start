import gulp from "gulp";
import include from "gulp-file-include";
import browsersync from "browser-sync";

function views() {
    return gulp.src("./src/views/*.html")
        .pipe(include({
            prefix: "@@",
            basepath: "@file"
        }))
        .pipe(gulp.dest("./build"))
        .pipe(browsersync.stream());
}

gulp.task("views", views);