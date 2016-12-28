var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function(){
  gulp.src('scss/customStyle.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('scss/customStyle.scss', ['styles']);
});
