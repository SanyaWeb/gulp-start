import gulp from "gulp";
import imagemin from "gulp-imagemin";
import browsersync from "browser-sync";

gulp.task("images", () => {
    return gulp.src(
        [
            "./src/img/*.{jpg,jpeg,png,gif,svg,tiff}",
        ]
    )
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: false },
                    { removeUnusedNS: false },
                    { removeUselessStrokeAndFill: false },
                    { cleanupIDs: false },
                    { removeComments: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyText: true },
                    { collapseGroups: true }
                ]
            })
        ]))
        .pipe(gulp.dest("./build/img"))
        .on("end", browsersync.reload);
});