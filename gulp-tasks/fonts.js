import gulp from "gulp";

gulp.task("fonts", () => {
    return gulp.src("./src/fonts/**/*.{woff,woff2}")
        .pipe(gulp.dest("./build/fonts/"))
});