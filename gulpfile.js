var gulp = require('gulp'),
    sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
	cssnano     = require('gulp-cssnano'),
    rename      = require('gulp-rename'),
	del         = require('del'),
	imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer');
	
gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() { 
    browserSync({
        server: {
            baseDir: 'app' 
        },
        notify: false 
    });
});

gulp.task('scripts', function() {
    return gulp.src([ 
        'app/script/**/*.js',
        ])
        .pipe(concat('script.min.js'))
        .pipe(uglify()) 
        .pipe(gulp.dest('app/script')); 
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
    return gulp.src('app/*.php')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('css-min', function() {
    return gulp.src('app/css/**/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'})) 
        .pipe(gulp.dest('app/css'));
});

gulp.task('clean', function() {
    return del('dist');
});

gulp.task('img', function() {
    return gulp.src('app/img/**/*')
        .pipe(cache(imagemin({ 
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))/**/)
        .pipe(gulp.dest('dist/img'));
});

gulp.task('prebuild', async function() {
    var buildCss = gulp.src('app/css/style.min.css')
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*') 
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/script/script.min.js')
    .pipe(gulp.dest('dist/script'))

    var buildHtml = gulp.src([
	'app/**/*.html',
	'app/**/*.php'
	])
    .pipe(gulp.dest('dist'));
	
});

gulp.task('clear', function (callback) {
    return cache.clearAll();
})

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')),
	gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch(['app/scpipts/**/*.js'], gulp.parallel('scripts'));
});
gulp.task('default', gulp.parallel('css-min', 'sass', 'scripts', 'browser-sync', 'watch'));
gulp.task('build', gulp.parallel('clean', 'img', 'sass', 'css-min', 'scripts', 'prebuild'));