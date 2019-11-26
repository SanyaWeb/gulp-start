import gulp from 'gulp'
import spritesmith from 'gulp.spritesmith'
import browsersync from "browser-sync";

function spritesPNG(){
    return gulp.src('./src/icons/png/*.png')
        .pipe(spritesmith({
            imgName: 'icons/sprite.png',
            cssName: 'css/sprite/sprite.less'
        }))
        .pipe(gulp.dest('./src/'));
}

function spriteBuild() {
    return gulp.src( "./src/icons/sprite.png")
        .pipe(gulp.dest("./build/icons"))
        .on("end", browsersync.reload);
}

gulp.task('spritesPNG', gulp.series(spritesPNG, spriteBuild));