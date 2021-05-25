const gulp = require('gulp');
const sass = require('gulp-sass');

function scssToCss() {
    return gulp.src('./sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css/'))
}

function watchFiles() {
    gulp.watch('./sass', scssToCss)
}

const build = gulp.series(scssToCss, watchFiles)

exports.default = build