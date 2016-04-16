var config = require('./gulp.config.js')();
var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var rename = require("gulp-rename");
var gutil = require('gulp-util');
var liveReload = require('gulp-server-livereload');
var less = require('gulp-less');

gulp.task('serve', ['inject'], function(){
    gulp.src('')
        .pipe(liveReload({
          livereload: true,
          directoryListing: false,
          open: true,
          port: 1010,
          defaultFile: 'index.html'
        }));
});

gulp.task('inject', ['wiredep', 'less-styles'], function(){
    log('Injecting CSS');

    return gulp.src(config.index)
        .pipe(inject(gulp.src(config.css, {read: false})))
        .pipe(gulp.dest('./'));
});

gulp.task('wiredep', function(){
    log('Wiring up bower and injecting application');

    return gulp.src(config.templateIndex)
        .pipe(wiredep({}))
        // todo: control order of module.js etc
        .pipe(inject(gulp.src(config.allJs, {read: false})))
        .pipe(rename(config.index))
        .pipe(gulp.dest('./'));
});

gulp.task('less-styles', function() {
    log('Compiling less ---> CSS');

    return gulp.src(config.less)
        .pipe(less())
        .pipe(gulp.dest(config.tmp));
});

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                gutil.log(gutil.colors.blue(msg[item]));
            }
        }
    } else {
        gutil.log(gutil.colors.blue(msg));
    }
}
