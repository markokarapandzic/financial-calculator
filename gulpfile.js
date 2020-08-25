const fs = require('fs');
const { src, dest, series } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const rename = require('gulp-rename');

function preBuild(next) {
  if (fs.existsSync('./dist')) {
    return src('./dist/', { read: false })
      .pipe(clean());
  } else {
    return next();
  }
}

function moveIndexHTML() {
  return src('./src/index-template.html')
    .pipe(rename('index.html'))
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
