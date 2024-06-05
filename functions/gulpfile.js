const gulp = require("gulp");
const copy = require("gulp-copy");

// Define a task to copy font files
gulp.task("copy-fonts", function () {
  return gulp.src("src/fonts/**/*").pipe(copy("lib")); // Change 'dist' to your output directory
});
