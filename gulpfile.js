var gulp         = require('gulp');
var sass         = require('gulp-sass');
var php          = require('gulp-connect-php');
var browserSync  = require('browser-sync').create();
var useref       = require('gulp-useref');
var gulpIf       = require('gulp-if');
var uglify       = require('gulp-uglify');
var cssnano      = require('gulp-cssnano');
var imagemin     = require('gulp-imagemin');
var cache        = require('gulp-cache');
var del          = require('del');
var runSequence = require('run-sequence');

// generic example
//gulp.task('task-name', function () {
//  return gulp.src('source-files') // Get source files with gulp.src
//    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
//})

// compile sass to css and move to /app/css
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// compile scss to css and move to /dist
gulp.task('css', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
});

// TODO should minify as well
// move js to /dist
gulp.task('js', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
});

gulp.task('php', function() {
  php.server({
    base: 'app',
    port: 8010,
    keepalive: true
  });
});

// watch app and run different tasks
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.php', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

// live reload
gulp.task('browserSync', ['php'], function() {
  browserSync.init({
    proxy: 'http://127.0.0.1:8010/'
  })
});

// concat files and ugilfy them
gulp.task('useref', function() {
  return gulp.src('app/**/*.php')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// optimze images
gulp.task('images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpg|gif|svg)')
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('dist/images'))
});

// optimze images for prod
gulp.task('prod-images', function() {
  return gulp.src('app/images/**/*.+(png|jpg|jpg|gif|svg)')
    .pipe( cache( imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 8 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]}
      )
    ]) ) )
    .pipe(gulp.dest('dist/images'))
});

// clean dist directory
gulp.task('clean:dist', function() {
  return del.sync('dist');
});

// copy files
gulp.task('copy', function() {
  return gulp.src('app/**/*.+(png|xml|gif|ico|json|.htaccess)')
    .pipe(gulp.dest('dist/'))
})

// build project
gulp.task('build', function(callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images'],
    callback
  )
});

// build project for production
gulp.task('prod', function() {
  runSequence('clean:dist', [
    'css',
    'js',
    'useref',
    'prod-images',
    'copy'
  ])
});

// default task for easy start
gulp.task('default', function(callback) {
  runSequence(
    ['build', 'browserSync', 'watch'],
    callback
  )
});
