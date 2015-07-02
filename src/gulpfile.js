/*!
 * Gulp: The streaming build system.
 * https://github.com/gulpjs/gulp | http://gulpjs.com/
 */

'use strict';

var gulp                   = require('gulp');
var sass              = require('gulp-sass');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var del                     = require('del');

// DEFINING TASKS
// To define a task, the gulp.task() function is used.
// This function takes two attributes: the task’s name and a function to run.
gulp.task('greet', function(){
  console.log('Hello, World!');
});
