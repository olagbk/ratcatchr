/**
 * Created by reis on 11/15/15.
 */

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var openURL = require('open');

var yeoman = {
    app: require('../bower.json').appPath || 'app',
    dist: 'dist'
};

gulp.task('start:client', ['start:server', 'styles'], function () {
    openURL('http://localhost:9000');
});

gulp.task('start:server', ["bsfy"], function() {
    $.connect.server({
        root: [yeoman.app, '.tmp'],
        livereload: true,
        // Change this to '0.0.0.0' to access the server from outside.
        port: 9000
    });
});

gulp.task('start:server:test', function() {
    $.connect.server({
        root: ['test', yeoman.app, '.tmp'],
        livereload: true,
        port: 9001
    });
});

