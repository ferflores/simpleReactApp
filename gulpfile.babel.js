import gulp from 'gulp';
import browserify from 'browserify';
import reactify from 'reactify';
import babel from 'gulp-babel';
import path from 'path';
import fs from 'fs';

var paths = {
  client: path.resolve(__dirname, 'src/index.jsx'),
  server: path.resolve(__dirname, 'src/server.js'),
  shared: path.resolve(__dirname, 'src/shared/routes.js'),
  components: path.resolve(__dirname, 'src/components/**/*.jsx')
};

gulp.task('build', ['build-components', 'build-shared', 'build-client', 'build-server']);

gulp.task('build-components', () => {
  return gulp.src(paths.components)
		.pipe(babel({
			presets: ['react','es2015']
		}))

		.pipe(gulp.dest('build/components'));
});

gulp.task('build-shared', () => {
  return gulp.src(paths.shared)
		.pipe(babel({
			presets: ['react','es2015']
		}))

		.pipe(gulp.dest('build/shared'));
});

gulp.task('build-client', () => {
  return browserify({
        entries: [paths.client],
        extensions: ['.jsx']
    })

    .transform('babelify', {presets: ['es2015','react']})
    .bundle()
    .pipe(fs.createWriteStream('./build/bundle.js'));
});

gulp.task('build-server', () => {
  return gulp.src(paths.server)
  //.pipe(react({harmony: false, es6module: true}))
		.pipe(babel({
			presets: ['react','es2015']
		}))

		.pipe(gulp.dest('build'));
});
