# gulp-async-tasks

A gulp plugin to create async tasks from gulpfile.js tasks.

[![Circle CI](https://circleci.com/gh/CODEYA/node-gulp-async-tasks/tree/master.svg?style=svg)](https://circleci.com/gh/CODEYA/node-gulp-async-tasks/tree/master)
[![npm version](https://badge.fury.io/js/gulp-async-tasks.svg)](http://badge.fury.io/js/gulp-async-tasks)
[![npm downloads](https://img.shields.io/npm/dm/gulp-async-tasks.svg)](https://img.shields.io/npm/dm/gulp-async-tasks.svg)
[![npm license](https://img.shields.io/npm/l/gulp-async-tasks.svg)](https://img.shields.io/npm/l/gulp-async-tasks.svg)
[![Dependency Status](https://gemnasium.com/CODEYA/node-gulp-async-tasks.svg)](https://gemnasium.com/CODEYA/node-gulp-async-tasks)

# Install

With [npm](https://www.npmjs.com/) do:

```bash
$ npm install --save-dev gulp-async-tasks
```

# Usage

gulp-async-tasks creates async tasks for all tasks in gulpfile.js. Async task has name suffix ":async".

```javascript
var gulp = require('gulp-async-tasks')(require('gulp'));

gulp.task('dosomething', function() {
  return gulp.src('src/**/*').pipe(...);
});
gulp.task('default', ['dosomeghing:async']);
```

If you use gulp-async-tasks with [require-dir](https://www.npmjs.com/package/require-dir),

```JavaScript
var gulp = require('gulp');
require('require-dir')('./gulp');
require('gulp-async-tasks')(gulp);
```

# API

## Construct

```javascript
var gulp = require('gulp-async-tasks')(require('gulp'), [*options*]);
```

**Options:**

| name        | type    | description                           | default value                 |
|-------------|---------|---------------------------------------|-------------------------------|
| verbose     | boolean | Show verbose messages.                | false                         |

Example:

```javascript
var gulp = require('gulp-async-tasks')(require('gulp'), [verbose: false]);
```
