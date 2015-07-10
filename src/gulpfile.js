/*!
 * @Mixins: repository for every mixins.
 * _____________________________________
 * Gulp: The streaming build system.
 * https://github.com/gulpjs/gulp | http://gulpjs.com/
 * @author  : Prabhat Kumar, http://prabhatkumar.org/
 * @date    : 05-July-2015
 * ___________________________________________________
 */

'use strict';
// required modules
var gulp                   = require('gulp');
var sass              = require('gulp-sass');
var concat          = require('gulp-concat');
var scsslint     = require('gulp-scss-lint');
var uglify          = require('gulp-uglify');
var beautify      = require('gulp-beautify');
var sourcemaps  = require('gulp-sourcemaps');
var connect        = require('gulp-connect');
var jade              = require('gulp-jade');
var htmlmin        = require('gulp-htmlmin');
var less              = require('gulp-less');
// utility modules
var path                   = require('path');
var gulpif              = require('gulp-if');
var size              = require('gulp-size');
var del                     = require('del');
var notify          = require("gulp-notify");
var rename          = require("gulp-rename");
var replace        = require('gulp-replace');
var bytediff      = require('gulp-bytediff');
var chmod            = require('gulp-chmod');

// SETTINGS
var paths = {
  src   :'',
  dist  :''
};

// DEFINING TASKS
// To define a task, the gulp.task() function is used.
// This function takes two attributes: the task’s name and a function to run.
gulp.task('greet', function(){
  console.log('Hello, World!');
});

// DEFINING TASKS for SASS
// To 1. build and 2. minify
gulp.task('sass', function(){
	gulp.src('sass/**/*.scss')
	    .pipe(sass.sync().on('error', sass.logError))
	    .pipe(sass({outputStyle: 'compressed'}))
	    .pipe(gulp.dest('/css/'));
});

gulp.task('sass:watch', function(){
  gulp.watch('sass/**/*.scss', ['sass']);
});

// Change permissions of Vinyl files
gulp.task('ok', function(){
  return gulp.src('src/app.js')
	     .pipe(chmod(755))
	     .pipe(gulp.dest('dist'));
});
