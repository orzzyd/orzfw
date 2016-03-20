// build and watch less files
var gulp = require('gulp');
var less = require('gulp-less');
gulp.task('less', function() {
    gulp.src('public/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'));
    gulp.src('public/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});
gulp.task('monitor', function() {
    gulp.watch('public/less/*.less', ['less']);
    gulp.watch('public/less/**/*.less', ['less']);
});
gulp.task('default', ['less', 'monitor']);