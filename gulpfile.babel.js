import gulp from 'gulp';
import browserify from 'browserify';
import babel from 'gulp-babel';
import path from 'path';
import fs from 'fs';

var paths = {
  clientMain: path.resolve(__dirname, 'src/index.jsx'),
  server: path.resolve(__dirname, 'src/server.js')
};

gulp.task('build', ['build-client', 'build-server']);

gulp.task('build-client', () => {
  return browserify(paths.clientMain)
    .transform('babelify', {presets: ['es2015-node5', 'react']})
    .bundle()
    .pipe(fs.createWriteStream('./build/bundle.js'));
});

gulp.task('build-server', () => {
  return gulp.src(paths.server)
		.pipe(babel({
			presets: ['es2015-node5']
		}))
		.pipe(gulp.dest('build'));
});
