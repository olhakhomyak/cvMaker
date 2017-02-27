var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    plumber = require('gulp-plumber'),
    reload = browserSync.reload,
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');


gulp.task('bower-js', function(){
    gulp.src([
        "bower_components/angular/angular.js",
        "bower_components/jquery/dist/jquery.js",
        "bower_components/angular-animate/angular-animate.js",
        "bower_components/angular-resource/angular-resource.js",
        "bower_components/angular-route/angular-route.js",
        "bower_components/moment/moment.js",
        "bower_components/angular-bootstrap/ui-bootstrap.min.js",
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
        "bower_components/satellizer/dist/satellizer.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js"
    ])
        .pipe(plumber())
        .pipe(concat('bower.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('app/bower/'))
        .pipe(uglify({mangle: true, exportAll: true}))
        .pipe(rename('bower.min.js'))
        .pipe(gulp.dest('app/bower/'));
});


gulp.task('bower-css', function(){
    gulp.src([
        "bower_components/bootstrap/dist/css/bootstrap.css",
        "bower_components/angular-bootstrap/ui-bootstrap-csp.css",
        "bower_components/components-font-awesome/css/font-awesome.css"
    ])
        .pipe(plumber())
        .pipe(concat('bower.css'))
        .pipe(gulp.dest('app/bower/'))
        .pipe(ngAnnotate())
        .pipe(uglify({mangle: true, exportAll: true}))
        .pipe(rename('bower.min.css'))
        .pipe(gulp.dest('app/bower/'));
});


gulp.task('scripts', function () {
    gulp.src('src/js/**/**/*.js')
        .pipe(plumber())
        .pipe(concat('all.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest('app/js'));
});


gulp.task('html', function () {
   gulp.src('src/js/**/**/*.html')
       .pipe(gulp.dest('app/templates'))
       .pipe(reload({stream:true}));
});


gulp.task('styles', function () {
    gulp.src('src/scss/main.scss')
       .pipe(plumber())
       .pipe(sass())
       .pipe(gulp.dest('app/css/'))
       .pipe(reload({stream:true}));
});


gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./app/"
        }
    })
});


gulp.task('watch', function () {
   gulp.watch('src/js/**/**/*.js', ['scripts']);
   gulp.watch('src/scss/*.scss', ['styles']);
   gulp.watch('src/js/**/**/*.html', ['html']);
   gulp.watch('app/index.html')
});


gulp.task('default', ['scripts', 'html', 'browser-sync', 'styles', 'watch', 'bower-js', 'bower-css']);