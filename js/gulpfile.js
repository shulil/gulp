var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  gulp.src('js/*.js')
  .pipe(gulp.dest('build/js'));
  console.log(22222);
});