"use strict";
var gulp = require('gulp');
var inlineSource = require('gulp-inline-source');
var htmlmin = require('gulp-htmlmin');

var path = {
    html: "src/index.html",
    js: "src/js/*",
    css: "src/css/*",
    output: "./"
};

gulp.task('build', function () {
    return gulp.src(path.html)
        .pipe(inlineSource("src/"))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(path.output));
});
