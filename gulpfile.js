var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var nodemon = require('gulp-nodemon');

var path = {
  HTML: 'src/index.html',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_SRC: 'dist/src',
  ENTRY_POINT: './src/js/app.js'
};

gulp.task('copy', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy']);

  var watcher  = watchify(browserify({
    entries: [path.ENTRY_POINT],
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  }));

  return watcher.on('update', function () {
    watcher.bundle()
      .pipe(source(path.OUT))
      .pipe(gulp.dest(path.DEST_SRC))
      console.log('Updated');
  })
    .bundle()
    .pipe(source(path.OUT))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('serve', function() {
  nodemon({
    script: 'bin/www',
    ext: 'js',
  })
});

gulp.task('default', ['serve', 'copy', 'watch']);
