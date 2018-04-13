// Code written by praveer panghal on 04/28/2017.
// Below code is used to create minfied versions of file for production server.
// Code is helpfull for unit testing and build release.
var gulp        = require('gulp');
var changed     = require('gulp-changed');
var imagemin    = require('gulp-imagemin');
var autoprefix  = require('gulp-autoprefixer');
var minifyCSS   = require('gulp-minify-css');
var concat      = require('gulp-concat');
var minify      = require('gulp-minify');
var concatCss   = require('gulp-concat-css');
var clean       = require('gulp-clean');
var minifyejs = require('gulp-minify-ejs');
var jsonminify = require('gulp-jsonminify');
var uglify = require('gulp-uglify');
var pump = require('pump');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

// gulp.task('compress-html', function() {
//   return gulp.src(['./src/**/*.html', '!./src/node_modules/**'])
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('Build'));
// });
 
// gulp.task('compress-css', () => {
//   return gulp.src('./src/**/*.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('Build'));
// });

// gulp.task('compress-js', function (cb) {
//     pump([
//           gulp.src(['Src/**/*.js', '!Src/node_modules/**/*.js']),
//           uglify(),
//           gulp.dest('Build')
//       ],
//       cb
//     );
//   });

gulp.task('compress-json', function () {
    return gulp.src(['Src/**/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('Build'));
});
// This function will copy all the files from Src to Build directory ,
// and will compress HTML, CSS and JS files.
var options = {
        src:'./Src' ,       
       dest: './Build/'       
    };

 require('gulp-compress')(gulp, options);

 gulp.task('minify-ejs', function() {
    return gulp.src(['src/*.ejs'])
      .pipe(minifyejs())
      //.pipe(rename({suffix:".min"})) 
      .pipe(gulp.dest('Build'))
  })
// This task will compress the images and will copy from src/images to Build/images directory.
gulp.task('compress-image', function() {
   var img_src = 'src/images/**/*', img_dest = 'Build/images';
   gulp.src(img_src)
   .pipe(changed(img_dest))
   .pipe(imagemin())
   .pipe(gulp.dest(img_dest));
});

gulp.task('fonts-copy', function() {
    return gulp.src(['./Src/fonts/**'])
            .pipe(gulp.dest('Build/fonts/'));
});

// This is defalut task to run all task at a time , just type gulp in command prompt .
//  gulp.task('default', ['compress-html','compress-css','compress-js','compress-image','compress-json','minify-ejs','fonts-copy'], function() {});
gulp.task('default', ['compress','compress-image','compress-json','minify-ejs','fonts-copy'], function() {});