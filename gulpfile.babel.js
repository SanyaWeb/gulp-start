import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir("./gulp-tasks/");

import del from 'del'

function cleanCss() {
    return del("./build/css/**/*.css");
}
function cleanJs() {
    return del("./build/js/*.js");
}
function cleanHtml() {
    return del("./build/*.html");
}
function cleanImages() {
    return del(["./build/img/*", "./build/icons/*"]);
}
function cleanFonts() {
    return del("./build/fonts/*.{woff,woff2}");
}
function cleanFavicons() {
    return del("./build/favicons/*");
}

export const styles = gulp.task("styles");
export const scripts = gulp.task("scripts");
export const views = gulp.task("views");
export const images = gulp.task("images");
export const serve = gulp.task("serve");
export const webp = gulp.task("webp");
export const spritesPNG = gulp.task("spritesPNG");
export const fonts = gulp.task("fonts");
export const favicons = gulp.task("favicons");

gulp.task("cleanAll", gulp.parallel(cleanCss, cleanJs, cleanHtml, cleanImages, cleanFonts, cleanFavicons));

gulp.task("serve", serve);
gulp.task("build", gulp.series(
    gulp.parallel(cleanCss, cleanJs, cleanHtml, cleanImages, cleanFonts, cleanFavicons),
    gulp.parallel( views, styles, scripts, images, webp, spritesPNG, fonts, favicons)
));

gulp.task("dev", gulp.series('build', 'serve'));