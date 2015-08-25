var gulp = require('gulp');
var concat = require('gulp-concat');
var rimraf = require('gulp-rimraf');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');
var react = require('gulp-react');

var paths = {
    css: ['src/scss/*.scss'],
    js: ['src/js/jsx/*.js']
};

gulp.task('move_lib', function () {
    var libs = [
        'public/lib/jquery/dist/jquery.min.js',
        'public/lib/react/react.min.js',
        'public/lib/ui-router/release/angular-ui-router.min.js'
    ];

    gulp.src(libs)
        .pipe(rename(function (path) {
            path.basename = path.basename.replace(".min", "");
        }))
        .pipe(gulp.dest('public/build/js'));

    gulp.src(['public/lib/requirejs/require.js', 'src/js/lib/r.js'])
        .pipe(concat('require.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('clean_css', function () {
    gulp.src(['public/build/css/*.css', 'public/build/css/*.scss'], {read: false})
        .pipe(rimraf({force: true}));
});

gulp.task('clean_js', function () {
    gulp.src('public/build/js/**/*.js', {read: false})
        .pipe(rimraf({force: true}));
});

gulp.task('scss', function () {
    gulp.src(paths.css)
        .pipe(changed('public/build/css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(csso())
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('javascript', function () {
    gulp.src(paths.js)
        .pipe(changed('public/build/js'))
        .pipe(react())
        .pipe(uglify())
        .pipe(gulp.dest('public/build/js'))
});

gulp.task('watch', function () {
    gulp.watch(paths.css, ['scss']);
    gulp.watch(paths.js, ['javascript']);
});


gulp.task('clean', ['clean_js', 'clean_css']);

gulp.task('default', ['watch', 'scss', 'javascript']);