// 获取 gulp
var gulp = require('gulp');

// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');

// 获取 babel
var babel = require('gulp-babel');

// 获取 minify-css 模块（用于压缩 CSS）
var minifyCSS = require('gulp-minify-css')

gulp.task('default', ['script', 'css', 'watch']);

// 压缩 js 文件
// 在命令行使用 gulp scripts 启动此任务
gulp.task('script', function() {
	gulp.src('js/*.js')
	.pipe(babel({
            presets: ['es2015']
        }))
	.pipe(uglify())
	.pipe(gulp.dest('build/js/'));
});

// 压缩 css 文件
// 在命令行使用 gulp scripts 启动此任务
gulp.task('css', function() {
	gulp.src('css/*.css')
	.pipe(minifyCSS())
	.pipe(gulp.dest('build/css/'));
});


gulp.task('watch',function() {
	
	// 监听文件修改，当文件被修改则执行 script 任务
	gulp.watch('js/*.js', ['script']);
	
	// 监听文件修改，当文件被修改则执行 css 任务
	gulp.watch('css/*.css', ['css']);
})