var config = require('./gulp.config.js')();
var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');
var rename = require("gulp-rename");
var gutil = require('gulp-util');

gulp.task('serve', ['wiredep'], function(){

});

gulp.task('wiredep', function(){
    log('Wiring up bower and injecting application js / css');

    gulp.src(config.templateIndex)
        .pipe(wiredep({}))
        .pipe(inject(gulp.src(config.allJs, {read: false})))
        .pipe(rename(config.index))
        .pipe(gulp.dest('./'));
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
