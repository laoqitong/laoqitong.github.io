/**
 * Created by Administrator on 2017/3/11.
 */
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');

/**
 * task: ��������
 *
 * src: �ļ���ȡ
 *
 * dest: �ļ�д��
 *
 * watch: �����ļ��仯
 *
 * run: ִ������
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