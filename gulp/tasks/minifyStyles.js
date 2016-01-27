var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
    paths = require('../paths');

gulp.task('minifyStyles', function () {
  return gulp.src(paths.dist.css)
    .pipe(cssnano())
    .pipe(gulp.dest(paths.dist.cssDir));
});
