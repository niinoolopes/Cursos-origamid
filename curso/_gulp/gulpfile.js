const { src, dest, parallel, series, watch } = require('gulp')
const concat = require('gulp-concat')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')


const paths = {
  dirs: '.',
  css: '../assets/css',
  sass: '../assets/css/scss/init.scss',
  js: '../assets/js',
  js_src: '../assets/js/src/**/*.js',
  name: {
    css: 'style.css',
    css_min: 'style_min.css',
    js: 'script.js',
    js_min: 'script_min.js'
  }
}


// FUNCTIONS 
function style_min() {
  return src([paths.sass])
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(concat(paths.name.css_min))
    .pipe(dest(paths.css))
}
function style() {
  return src(paths.sass)
    .pipe(sass())
    .pipe(concat(paths.name.css))
    .pipe(dest(paths.css))
}
function javascript_min() {
  return src([paths.js_src])
    .pipe(concat(paths.name.js_min))
    .pipe(uglify())
    .pipe(dest(paths.js))
}
function javascript() {
  return src([paths.js_src])
    .pipe(concat(paths.name.js))
    .pipe(dest(paths.js))
}
function watchFiles() {
  watch(paths.css + '/**/*.scss', css);
  watch(paths.js + '/src**/*.js', js);
}

// series  
const css = series(style, style_min)
const js = series(javascript, javascript_min)
const watchFile = series(watchFiles)

const build = series(
  css,
  js,
  watchFile
)

// default GULP 
exports.css = css;
exports.js = js;
exports.watchFile = watchFile;

exports.default = build;
