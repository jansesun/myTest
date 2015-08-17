'use strict';
var gulp = require('gulp'),
	rename = require('gulp-rename'),
	jeditor = require('gulp-json-editor'),
	_ = require('underscore');
gulp.task('bower', function() {
	return gulp.src('./package.json')
		.pipe(rename('bower.json'))
		.pipe(jeditor(function(json) {
			return _.pick(json, [
				'name', 'version', 'description', 'main', 'keywords', 'author', 'license', 'dependencies'
			]);
		}))
		.pipe(gulp.dest('./'));
});
