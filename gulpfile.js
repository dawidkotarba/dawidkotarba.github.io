var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var minifyHtml = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var util = require("gulp-util")

gulp.task('clean', (done) => {
    del.sync('dist');
    done();
});

gulp.task('js', (done) => {
    gulp.src(['js/jquery.js', 'js/jquery-migrate.min.js', 'js/jquery.scrollTo.js', 'js/global.js', 'js/ga-tags.js', 'js/navigation.js'])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());

    gulp.src('js/html5.js')
        .pipe(concat('html5.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());

    gulp.src('js/ga.js')
        .pipe(concat('ga.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());

    done();
});

gulp.task('css', (done) => {
    gulp.src(['css/**/*.css', 'css/**/*.scss'])
        .pipe(concat('bundle.css'))
        .pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());

    gulp.src('css/ie8.css')
        .pipe(concat('ie8.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());

    done();
});

gulp.task('html', (done) => {
    gulp.src(['index_dev.html'])

        .pipe(minifyHtml({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(rename({basename: 'index'}))
        .pipe(gulp.dest('./'));

    done();
});

gulp.task('img', (done) => {
    gulp.src('img/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'));

    done();
});

gulp.task('watch', (done) => {
    gulp.watch('js/*.js', gulp.series('js'));
    gulp.watch('css/**/*.+(css|scss)', gulp.series('css'));
    gulp.watch('img/*.*', gulp.series('img'));
    gulp.watch('./**/index_dev.html', gulp.series('html'));

    done();
});

gulp.task('browser-sync', (done) => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['./**/index.html'], gulp.series((done) => {
        browserSync.reload();
        done();
    }));

    done();
});

gulp.task('build', gulp.parallel('clean', 'js', 'css', 'img', 'html'));
gulp.task('serve', gulp.parallel('watch', 'browser-sync'));

gulp.task('default', gulp.series('build', (done) => {
    util.log("Waiting 2 secs to run browser...");
    setTimeout(() => {
        (gulp.series('serve')());
        done();
    }, 2000)
}));