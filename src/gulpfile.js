/*!
 * @Mixins: repository for every mixins.
 * _____________________________________
 * Gulp: The streaming build system.
 * https://github.com/gulpjs/gulp | http://gulpjs.com/
 * @author  : Prabhat Kumar, http://prabhatkumar.org/
 * @date    : 02-July-2015
 */

'use strict';

var gulp                   = require('gulp');
var sass              = require('gulp-sass');
var concat          = require('gulp-concat');
var scsslint     = require('gulp-scss-lint');
var uglify          = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var connect        = require('gulp-connect');
var htmlmin        = require('gulp-htmlmin');
var del                     = require('del');


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
});
