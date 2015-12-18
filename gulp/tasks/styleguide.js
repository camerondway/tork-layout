var gulp = require('gulp'),
    styledown = require('gulp-styledown');

gulp.task('styleguide', function () {
  return gulp.src('./app/assets/styles/**/*.css')
    .pipe(styledown({
      config: './gulp/templates/styleguide.md',
      filename: 'styleguide.html'
    }))
    .pipe(gulp.dest('./app/assets/'));
});
