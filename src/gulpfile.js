/*!
 * @Mixins: repository for every mixins.
 * _____________________________________
 * Gulp: The streaming build system.
 * https://github.com/gulpjs/gulp | http://gulpjs.com/
 * @author  : Prabhat Kumar, http://prabhatkumar.org/
 * @date    : 05-July-2015
 */

'use strict';

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
var path                   = require('path');
var gulpif              = require('gulp-if');
var size              = require('gulp-size');
var del                     = require('del');
var notify          = require("gulp-notify");
var rename          = require("gulp-rename");
var replace        = require('gulp-replace');

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
