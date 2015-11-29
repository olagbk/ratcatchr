/**
 * Created by reis on 11/15/15.
 */
var gulp = require('gulp');
var path = require('path');
var foreach = require("gulp-foreach");
var extend = require("node.extend");
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');

var environment = process.env.NODE_ENV || "development";
var is_dev = (environment == "development");

var libs = [
    "angular",
    "bootstrap",
    "jquery",
    "lodash",
    "ocLazyLoad",
    "angular-bootstrap",
    "angular-seo",
    "angularjs-geolocation",
    "angular-ui-router",
    "angular-mocks",
    "angular-simple-logger",
    "angular-google-maps"
];

gulp.task("bsfy", ["clean"], function(){
    gulp.run(["bsfy-scripts", "bsfy-styles"]);
});

gulp.task("bsfy-scripts", ["bsfy-scripts-vendor", "bsfy-scripts-bundles"]);

gulp.task("bsfy-scripts-vendor", function(){

    return make_bundle({
        out_file: "vendor.js",
        use_watchify: false,
        bsfy_bower_opts: {
            require: libs
        }
    });
});
gulp.task("bsfy-scripts-bundles", function(){
    //Create all the bundles for each page.
    return gulp.src('app/scripts/bundles/*.js')
        .pipe(foreach(function(stream, file){
            return make_bundle({
                bsfy_opts: {entries: file.path},
                bsfy_bower_opts: {external: libs}
            });
        }));
});

gulp.task('copy-bs-fonts', function(){
    return gulp.src('bower_components/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}')
        .pipe(gulp.dest(path.join('app/fonts/')));
});

gulp.task("bsfy-styles", ["copy-bs-fonts"], function(){

    return gulp.src('app/styles/bundles/*.js')
        .pipe(foreach(function(stream, file){
            return make_bundle({
                out_file: ("style_" + path.basename(file.path)),

                bsfy_opts: {
                    paths: ["app", "bower_components"],
                    entries: file.path,
                    transform: [
                        ["sassify", {
                            'auto-inject': true, // Inject css directly in the code
                            base64Encode: !is_dev, // Use base64 to inject css
                            sourceMap: is_dev // Add source map to the code
                        }],

                        ["node-lessify", {}]
                    ]
                },

                bsfy_bower_opts: {external: libs}
            });
        }));
});

var make_bundle = function(opts){

    if(opts === undefined){
        opts = {};
    }

    if(opts.use_watchify === undefined){
        opts.use_watchify = is_dev;
    }

    if(opts.bsfy_opts === undefined){
        opts.bsfy_opts = {};
    }

    if(opts.bsfy_bower_opts === undefined){
        opts.bsfy_bower_opts = {};
    }

    var out_file = opts.out_file || path.basename(opts.bsfy_opts.entries);

    var bsfy_opts_common = {
        debug: true,
        paths: ["app/scripts/ng_scripts"],
        cache: {},
        packageCache: {}
    };

    var bsfy_opts = extend(bsfy_opts_common, opts.bsfy_opts);

    var b = browserify(bsfy_opts);

    if(opts.use_watchify){
        b = watchify(b);
        b.on('update', rebundle);
    }

    b.plugin("browserify-bower", opts.bsfy_bower_opts);

    function rebundle () {
        console.log("Bundling "+out_file+"...");
        return b.bundle()
            .pipe(source(out_file))
            .pipe(gulp.dest('app/dist'));
    }

    return rebundle();

};