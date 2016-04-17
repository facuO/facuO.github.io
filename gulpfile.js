var gulp = require('gulp');

gulp.task('default', function() {
	gulp.src('/').
	  .pipe(name(''))
  gulp.watch('*.html', ['tasks']);
});