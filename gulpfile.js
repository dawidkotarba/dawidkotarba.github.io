var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');

gulp.task('js', async function () {
    gulp.src(['./js/jquery.js', './js/jquery-migrate.min.js', './js/jquery.scrollTo.js', './js/global.js', './js/ga-tags.js', './js/custom.js'])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'))

    gulp.src('./js/html5.js')
        .pipe(concat('html5.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'))

    gulp.src('./js/ga.js')
        .pipe(concat('ga.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js/'))
});

gulp.task('css', async function () {
    gulp.src(['./css/style.css', './css/ie8.css', './css/fonts.css', './css/donuts.css', './css/animate.min.css', './css/custom.css'])
        .pipe(concat('bundle.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./css/'))

    gulp.src('./css/ie8.css')
        .pipe(concat('ie8.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./css/'))
});

gulp.task('default', gulp.series('js', 'css'));