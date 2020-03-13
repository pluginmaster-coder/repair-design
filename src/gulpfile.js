const {src, dest, watch, } = require('gulp');
const browserSync = require('browser-sync').create();
const sourcemaps = require ('gulp-sourcemaps');
const sass = require('gulp-sass');

// gulp.task('hello', function(done){
// console.log('Привет мир!');
// done();
// });
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss")
  //   .pipe (sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
  //   .pipe (sourcemaps.write(./))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

exports.bs = bs;
// exports.serveSass = serveSass;

       


      
// const {
//     src,
//     dest,
//     watch
//   } = require("gulp");
//   const browserSync = require("browser-sync").create();
//   const sass = require("gulp-sass");
  
  
//   function bs() {
//     serveSass();
//     browserSync.init({
//       server: {
//         baseDir: "./src/"
//       }
//     });
//     watch("./src/*.html").on("change", browserSync.reload);
//     watch("./src/sass/**/*.sass)", serveSass);
//     watch("./src/js/*.js").on("change", browserSync.reload);
//   }
  
//   function serveSass() {
//     return src("./src/sass/*.sass")
//       .pipe(sass())
//       .pipe(dest("./src/css"))
//       .pipe(browserSync.stream());
//   }
//   exports.serve = bs;