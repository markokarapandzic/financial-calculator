const { src, dest, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const image = require('gulp-image');
const inject = require('gulp-inject');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');

function preBuild() {
  return src('./dist/', { read: false })
    .pipe(clean());
}

function moveIndexHTML() {
  return src('./src/index.html')
    .pipe(inject(src(['./dist/**/*.css', './dist/**/*.js'], { read: false }), { addRootSlash: true, relative: false }))
    .pipe(dest('dist/'));
}

function minifyCSS() {
  return src('./src/**/*.css')
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(dest('dist/'));
}

function minifyJS() {
  return src(['./src/**/*.js', '!./src/service-worker.js'])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('./dist/'));
}

exports.default = series(
  preBuild,
  minifyCSS,
  minifyJS,
  moveIndexHTML,
);
