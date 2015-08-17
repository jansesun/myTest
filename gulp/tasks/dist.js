'use strict';
var gulp = require('gulp'),
	webpack = require('gulp-webpack');
gulp.task('dist', ['bower'], function() {
	return gulp.src('src/test.js')
		.pipe(webpack({
			output: {
				libraryTarget: 'cmd',
				fileName: 'test.js'
			},
			devtool: 'source-map'
		}))
		.pipe(gulp.dest('dist'));
});
