const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('cssmin', gulp.series( ()=>{
    gulp.src('./src/css/*')
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css/'));
}));

gulp.task('htmlmin', gulp.series( ()=>{
    gulp.src('./src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'));
}));

gulp.task('imagemin', gulp.series( ()=>{
    gulp.src('./src/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img/'));
}));

gulp.task('uglify', gulp.series( ()=>{
    gulp.src('./src/js/*')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
}));

gulp.task('default', gulp.parallel('cssmin', 'htmlmin', 'imagemin', 'uglify'));