'use strict'
var gutil = require('gulp-util');

/**
 * Plugin
 *
 * @param {object} gulp - gulp instance
 * @param {map} options - plugin options
 */
module.exports = function (gulp, options) {
  options = options || {};
  var verbose = options.verbose || false;

  for(var taskName in gulp.tasks) {
    var asyncTaskName = taskName + ":async";
    if(verbose) {
      gutil.log(gutil.colors.red("[gulp-async-tasks]") + gutil.colors.cyan(" Creating a task \"" + asyncTaskName + "\""));
    }
    gulp.tasks[asyncTaskName] = {name: asyncTaskName, dep: [], fn: createAsyncFn(gulp, taskName) };
  }

  return gulp;
};

/**
 * Create async function for specified task.
 *
 * @param {object} gulp - gulp instance
 * @param {string} taskName - task name.
 */
function createAsyncFn(gulp, taskName) {
    return function() { gulp.tasks[taskName].fn(function() {}); };
}
