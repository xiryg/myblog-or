const gulp = require("gulp")
// 用到的各个插件
const htmlMin = require('gulp-html-minifier-terser')
const htmlClean = require('gulp-htmlclean')
const terser = require('gulp-terser')
const cssnano = require('gulp-cssnano')
const fontmin = require('gulp-fontmin')

// 压缩js
// 参数 doc：https://github.com/terser-js/terser#minify-options
gulp.task('minify-js', () =>
    gulp.src(['./public/**/*.js'])
        .pipe(terser({
            compress: {
                /** @see https://blog.csdn.net/weixin_39842528/article/details/81390588 */
                sequences: 50,
                unsafe: true,
                unsafe_math: true,
                pure_getters: true,
                ecma: true
            }
        }))
        .pipe(gulp.dest('./public'))
)

// 压缩css
// 参数 doc：https://cssnano.co/docs/what-are-optimisations/
gulp.task('minify-css', () =>
    gulp.src(['./public/**/*.css'])
        .pipe(cssnano({
            mergeIdents: false,
            reduceIdents: false,
            discardUnused: false
        })).pipe(gulp.dest('./public'))
)

// 压缩html
// 参数 doc：https://github.com/terser/html-minifier-terser#readme
gulp.task('minify-html', () =>
    gulp.src('./public/**/*.html')
        .pipe(htmlClean())
        .pipe(htmlMin({
            collapseWhitespace: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        }))
        .pipe(gulp.dest('./public'))
);

//压缩字体
function minifyFont(text, cb) {
    gulp
        .src('./public/fonts/*.ttf') //原字体所在目录
        .pipe(fontmin({
            text: text
        }))
        .pipe(gulp.dest('./public/fontsdest/')) //压缩后的输出目录
        .on('end', cb);
}

gulp.task('minify-ttf', (cb) => {
    var buffers = [];
    gulp
        .src(['./public/**/*.html']) //HTML文件所在目录请根据自身情况修改
        .on('data', function (file) {
            buffers.push(file.contents);
        })
        .on('end', function () {
            var text = Buffer.concat(buffers).toString('utf-8');
            minifyFont(text, cb);
        });
});

//压缩
gulp.task("zip", gulp.parallel('minify-html', 'minify-ttf'))