/**
 * Created by Administrator on 2017/3/11.
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

/**
 * task: 创建任务
 *
 * src: 文件读取
 *
 * dest: 文件写入
 *
 * watch: 监听文件变化
 *
 * run: 执行任务
 *
 * */

gulp.task('html', function() {
    gulp.src('index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('developer'));
});