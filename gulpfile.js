var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var minifyHtml = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');

gulp.task('clean', function (done) {
    del.sync('dist');
    done();
});

gulp.task('js', function (done) {
    gulp.src(['js/custom.js', 'js/jquery.js', 'js/jquery-migrate.min.js', 'js/jquery.scrollTo.js', 'js/global.js', 'js/ga-tags.js', 'js/navigation.js'])
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

gulp.task('css', function (done) {
    gulp.src(['css/style.css', 'css/ie8.css', 'css/fonts.css', 'css/donuts.css', 'css/animate.min.css', 'css/custom.css'])
        .pipe(concat('bundle.css'))
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

gulp.task('html', function (done) {
    gulp.src(['index_dev.html'])

        .pipe(minifyHtml({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(rename({basename: 'index'}))
        .pipe(gulp.dest('./'));

    done();
});

gulp.task('img', function (done) {
    gulp.src('img/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin()))
        .pipe(gulp.dest('dist/img'));

    done();
});

gulp.task('watch', function (done) {
    gulp.watch('js/*.js', gulp.series('js'));
    gulp.watch('css/*.css', gulp.series('css'));
    gulp.watch('img/*.*', gulp.series('img'));
    gulp.watch('./**/index_dev.html', gulp.series('html'));

    done();
});

gulp.task('browser-sync', function (done) {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['./**/index.html'], gulp.series(function reload(done) {
        browserSync.reload();
        done();
    }));

    done();
});

gulp.task('serve', gulp.parallel('watch', 'browser-sync'));
gulp.task('build', gulp.parallel('clean', 'js', 'css', 'img', 'html'));

gulp.task('default', gulp.parallel('serve'));