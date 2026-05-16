const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber')
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');
const minifyHtml = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const imageminGuetzli = require('imagemin-guetzli');
const cache = require('gulp-cache');
const del = require('del');
const log = require('fancy-log');

gulp.task('clean', (done) => {
    del.sync('dist');
    done();
});

gulp.task('clear-cache', (done) => {
    cache.clearAll();
    done();
});

// custom.js has to go last
gulp.task('js-main', () => {
    return gulp.src(['src/js/pace.min.js',
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/jquery.scrollto/jquery.scrollTo.min.js',
        'node_modules/aos/dist/aos.js',
        'node_modules/lozad/dist/lozad.min.js',
        'src/js/global.js',
        'src/js/navigation.js',
        'src/js/jquery.easypiechart.min.js',
        'src/js/custom-lozad.js',
        'src/js/custom-piechart.js',
        'src/js/progress-button.js',
        'src/js/mobile-check.js',
        'src/js/custom.js'])
        .pipe(plumber())
        .pipe(concat('bundle.js'))
        .pipe(babel({
            presets: [
                ['@babel/env', {
                    modules: false
                }]
            ]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('js-ie', () => {
    return gulp.src('src/js/ie-check.js')
        .pipe(concat('ie-check.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});

gulp.task('js', gulp.parallel('js-main', 'js-ie'));

gulp.task('css', () => {
    return gulp.src(['src/css/**/*.css',
        'src/css/**/*.scss',
        'node_modules/aos/dist/aos.css',
        'node_modules/animate.css/animate.min.css'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('bundle.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('img', () => {
    return gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin([imageminGuetzli({
            quality: 85
        })])))
        .pipe(cache(imagemin({
            progressive: true
        })))
        .pipe(gulp.dest('dist/img'));
});

gulp.task('favicon', () => {
    return gulp.src('src/favicon/*.*')
        .pipe(gulp.dest('dist/favicon'));
});

gulp.task('html', () => {
    return gulp.src(['index_dev.html'])
        .pipe(minifyHtml({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(rename({basename: 'index'}))
        .pipe(gulp.dest('./'));
});

gulp.task('watch', (done) => {
    gulp.watch('src/js/*.js', gulp.series('js'));
    gulp.watch('src/css/**/*.+(css|scss)', gulp.series('css'));
    gulp.watch('src/img/*.*', gulp.series('img'));
    gulp.watch('src/favicon/*.*', gulp.series('favicon'));
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

gulp.task('buildWithoutImages', gulp.series('clean', gulp.parallel('js', 'css', 'favicon', 'html')));
gulp.task('build', gulp.series('clean', gulp.parallel('js', 'css', 'img', 'favicon', 'html')));
gulp.task('serve', gulp.parallel('watch', 'browser-sync'));

gulp.task('default', gulp.series('build', (done) => {
    log("Waiting 2 secs to run browser...");
    setTimeout(() => {
        (gulp.series('serve')());
        done();
    }, 2000)
}));
