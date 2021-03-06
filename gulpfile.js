const gulp = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const buffer = require('vinyl-buffer');
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const tsify = require('tsify');

gulp.task('typescript', () => {
  return browserify({
    basedir: '.',
    debug: true,
    entries: ['src/index.ts'],
    cache: {},
    packageCache: {}
  })
    .plugin(tsify)
    .bundle()
    .on('error', showError)
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .on('error', showError)
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', () => {
  gulp.watch('./src/**/*.ts', ['default']);
});

function showError(error) {
  console.error(error.toString());
  this.emit('end');
}

gulp.task("default", ['typescript']);