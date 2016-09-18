var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config')();
var compass = require('gulp-compass');

gulp.task('sass-compass', function(){
	return gulp.src('src/**/*.scss')
		.pipe(compass({
			config_file: './config.rb',
			sass: 'src/assets/scss',
			css: 'src/assets/css'
		}));
});
