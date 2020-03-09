const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sourcemaps = require ('gulp-sourcemaps');
const sass = require('gulp-sass')
// Static server

gulp.task('serve', function() {    
    // serveSass();
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    gulp.watch("./src/*.html").on('change', browserSync.reload); 
    gulp.watch("./src/sass/**/*.sass)", gulp.parallel ('serveSass'));   
    gulp.watch("./src/js/*.js").on("change", browserSync.reload);
});
 gulp.task('serveSass', function () {
          return gulp.src("./src/sass/*.sass")
        //   .pipe (sourcemaps.init())
          .pipe(sass().on('error',sass.logError))
        //   .pipe (sourcemaps.write(./))
          .pipe(gulp.dest("./src/css/"))
          .pipe(browserSync.stream());
      });
      
      gulp.task('default');



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