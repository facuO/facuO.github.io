var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
gulp.task('default',['browserSync'], function() {
  gulp.watch('app/*.html',browserSync.reload);
  gulp.watch('app/scripts/*.js',browserSync.reload);
  gulp.watch('app/styles/*.css',browserSync.reload);
});