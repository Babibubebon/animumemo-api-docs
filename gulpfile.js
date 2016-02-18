'use strict'

var gulp = require('gulp');
var aglio = require('gulp-aglio');
var less = require('gulp-less');
var path = require('path');

var dist_dir = './dist';

gulp.task('aglio', function() {
    gulp.src('*.apib')
        .pipe(aglio({
            template: 'default',
            themeFullWidth: true
        }))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('separate', ['less'], function() {
    gulp.src('*.apib')
        .pipe(aglio({
            themeTemplate: './theme/template.jade',
            themeFullWidth: true
        }))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('less', function() {
    gulp.src('./theme/layout.less')
        .pipe(less({
            paths: [path.join(__dirname, 'theme')]
        }))
        .pipe(gulp.dest(dist_dir));
});

gulp.task('watch', function() {
    gulp.watch('*.apib', ['aglio']);
});

gulp.task('default', ['aglio']);

