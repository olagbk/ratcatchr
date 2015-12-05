// Generated on 2015-11-15 using generator-angular 0.14.0
'use strict';

require("./tasks/browserify");
require("./tasks/server");

var gulp = require('gulp');
var del = require('del');


gulp.task('clean', function(){
    console.log("Cleaning temp and dist directories...");

    del([
        "app/scripts/temp/*",
        "app/dist/*",
    ]);
});

gulp.task('default', ['bsfy']);
