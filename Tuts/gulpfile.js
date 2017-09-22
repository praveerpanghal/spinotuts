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
var jsonminify = require('gulp-jsonminify');


 
gulp.task('compress-json', function () {
    return gulp.src(['Src/json/*.json'])
        .pipe(jsonminify())
        .pipe(gulp.dest('Build/json'));
});
// This function will copy all the files from Src to Build directory ,
// and will compress HTML, CSS and JS files.
var options = {
        src:'./Src' ,       
       dest: './Build/'       
    };

 require('gulp-compress')(gulp, options);

// gulp.task('Concat_styles', function() {   
//   return gulp.src(['Build/Content/bootstrap.min.css','Build/css/compressed.css'])  
//     .pipe(autoprefix('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
//     .pipe(concatCss("Style.css"))
//     .pipe(gulp.dest('Build/'))
   
// });
gulp.task('join-css', function(){
    gulp.src(['Build/Content/bootstrap.min.css','Build/css/compressed.css'])
        .pipe(concat('Style.css'))
        .pipe(gulp.dest('Build/css'))
});
// This task will compress the images and will copy from src/images to Build/images directory.
gulp.task('compress-image', function() {
   var img_src = 'src/images/**/*', img_dest = 'Build/images';
   gulp.src(img_src)
   .pipe(changed(img_dest))
   .pipe(imagemin())
   .pipe(gulp.dest(img_dest));
});

// gulp.task('CleanController', function () {
//     return gulp.src('./Build/js/controller/Controller.js')
//         .pipe(clean({force: true}))
// });

// This task will concat all JS files to Build Scripts directory.

gulp.task('join-js', function() {
  return gulp.src(['./Build/scripts/services/adsbygoogle.js','./Build/AngularScripts/jquery-3.1.0.min.js','./Build/AngularScripts/bootstrap.min.js',
    './Build/AngularScripts/angular.min.js','./Build/AngularScripts/angular-route.min.js',
    './Build/AngularScripts/angular-ui-router.js','./Build/AngularScripts/underscore.min.js',
    './Build/js/app.js','./Build/js/DynRoute.js','./Build/scripts/directives/custom_directives.js',
    './Build/scripts/services/CommonMethods.js','./Build/scripts/services/services.js','./Build/js/inf.js',
    './Build/js/scrolling-tabs.js','./Build/js/dirPagination.js','./Build/js/clipboard.min.js','./Build/js/ngStorage.min.js',
    './Build/js/angular-modal-service.js','./Build/js/angular-sanitize.js','./Build/js/ng-file-upload.js',
    './Build/js/ng-file-upload-shim.js','./Build/js/bootstrap-colorpicker-module.js','./Build/js/angular-wysiwyg.js',
    './Build/js/ui-bootstrap-tpls-0.10.0.js','./Build/scripts/services/GoogleAnalytics.js',
    './Build/js/controller/*.js','./Build/js/ng-img-crop.js','./Build/js/scripts.js'])
    .pipe(concat('Combined_JavaScripts.js'))
    .pipe(gulp.dest('./Build/'));
});

// This is defalut task to run all task at a time , just type gulp in command prompt .
 gulp.task('default', ['compress-html','compress-css','compress-js','compress-image','compress-json',
                       'join-js','join-css'], function() {
// whenever user will change in src directory , watch service will run the specified task automatically.
// gulp.watch('src/**/*.*', ['compress-html','compress-css','compress-js','compress-image','compress-json',
//                           'join-js','join-css']);



});