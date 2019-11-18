// const gulp = require('gulp');
const { watch, src, dest, parallel, series } = require('gulp');
const rename = require('gulp-rename');
// const runSequence = require('run-sequence');
const postcss = require('gulp-postcss');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache'); // 使用缓存
const replace = require('gulp-replace');
const through2 = require('through2');
const template = require('gulp-template');
const argv = require('minimist')(process.argv.slice(2)); // 获取环境变量参数
const jeditor = require('gulp-json-editor');

const srcDir = './miniprogram';

// 根据参数判断环境及生成 app.json
function appJson() {
  const { name } = argv;
  // 默认使用 ke.json
  const fileName = name || 'ke';
  return src(`config/${fileName}.json`)
    .pipe(
      rename('app.json')
    )
    .pipe(
      dest(`${srcDir}/`)
    );
}

// 改变环境或生成不同的小程序
function configArgs() {
  return src('config/config-template.js')
    .pipe(template({ name: argv.name || 'ke', env: argv.env || 'dev' }))
    .pipe(
      rename('config.js')
    )
    .pipe(
      dest(`${srcDir}/`)
    );
}

function css() {
  return src([`${srcDir}/**/*.css`, `!${srcDir}/**/_*.css`])
    .pipe(
      postcss().on('error', function(err) {
        console.error(err);
        this.emit('end'); // 防止中断
      })
    )
    // 去掉编译出来的 :root{}
    .pipe(replace(/:root\s\{[^}]*\}?\s*/, ''))
    .pipe(
      rename(path => {
        path.extname = '.wxss';
      })
    )
    .pipe(
      dest(file => {
        return file.base; // 原目录
      })
    );
}

function img() {
  return src(`${srcDir}/**/*.{png,jpe?g,gif,svg}`)
    .pipe(
      cache(
        imagemin([
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng({ optimizationLevel: 4 }),
          imagemin.svgo({
            plugins: [
              { removeDimensions: true }, // 如果有 viewbox 则不需要 width 和 height
            ],
          }),
        ])
      )
    )
    .pipe(
      dest(file => {
        return file.base; // 压缩到原目录
      })
    );
}


function nohost() {
  let host;
  if (process.argv[3]) {
    host = process.argv[3].split('=')[1];
  }
  return src(`${srcDir}/pages/*/*.wxml`)
    .pipe(through2.obj((file, _, cb) => {
      // console.log(file.contents.toString(), 'file');
      if (file.isBuffer()) {
        let contents = file.contents.toString();
        // 如果没有加 nohost
        if (!contents.includes('</nohost>')) {
          if (host) {
            contents += `<nohost host="${host}"></nohost>\r\n`;
          } else {
            contents += '<nohost></nohost>\r\n';
          }
        }
        file.contents = Buffer.from(contents);
      }
      cb(null, file);
    }))
    .pipe(
      dest(file => {
        return file.base; // 压缩到原目录
      })
    );
}

function nohostjson() {
  return src([`${srcDir}/app.json`, `${srcDir}/pages/wangka/wangka.json`])
    .pipe(
      jeditor((json) => {
        json.usingComponents = json.usingComponents && Object.keys(json.usingComponents).length > 0 ?
          Object.assign(json.usingComponents, {
            nohost: 'miniprogram_npm/@tencent/weapp-nohost/index',
          }) :
          {
            nohost: 'miniprogram_npm/@tencent/weapp-nohost/index',
          };
        return json;
      }, {
        brace_style: 'expand',
      })
    )
    .pipe(
      dest(file => {
        return file.base;
      })
    );
}

function removeNohost() {
  return src(`${srcDir}/pages/*/*.wxml`)
    .pipe(through2.obj((file, _, cb) => {
      if (file.isBuffer()) {
        const contents = file.contents.toString();
        // 如果没有加 nohost
        file.contents = Buffer.from(contents.replace(/<nohost\s*\S*>.*<\/nohost>\r*\n*/igm, ''));
      }
      cb(null, file);
    }))
    .pipe(
      dest(file => {
        return file.base; // 压缩到原目录
      })
    );
}

function removeNhostJson() {
  return src([`${srcDir}/app.json`, `${srcDir}/pages/wangka/wangka.json`])
    .pipe(
      jeditor((json) => {
        if (json.usingComponents && json.usingComponents.nohost) {
          delete json.usingComponents.nohost;
        }
        return json;
      })
    )
    .pipe(
      dest(file => {
        return file.base;
      })
    );
}

watch(`${srcDir}/**/*.css`, css);

exports.config = series(
  parallel(appJson, configArgs),
  argv.env === 'dev' ? parallel(nohost, nohostjson) : parallel(removeNohost, removeNhostJson)
); // 配置环境或生成的小程序
exports.css = css;
exports.img = img;
exports.nohost = parallel(nohost, nohostjson);
exports.removeNohost = parallel(removeNohost, removeNhostJson);
exports.default = parallel(css);

// 使用postcss
// gulp.task('css', () => {
//   return (
//     gulp
//       .src([`${src}/**/*.css`, `!${src}/**/_*.css`])
//       .pipe(
//         postcss().on('error', function(err) {
//           console.error(err);
//           this.emit('end'); // 防止中断
//         })
//       )
//       // 去掉编译出来的 :root{}
//       .pipe(replace(/:root\s\{[^}]*\}?\s*/, ''))
//       .pipe(
//         rename(path => {
//           path.extname = '.wxss';
//         })
//       )
//       .pipe(
//         gulp.dest(file => {
//           return file.base; // 原目录
//         })
//       )
//   );
// });

// gulp.task('img', () => {
//   // 修改你要压缩的图片地址
//   return gulp
//     .src(`${src}/**/*.{png,jpe?g,gif,svg}`)
//     .pipe(
//       cache(
//         imagemin([
//           imagemin.gifsicle({ interlaced: true }),
//           imagemin.jpegtran({ progressive: true }),
//           imagemin.optipng({ optimizationLevel: 4 }),
//           imagemin.svgo({
//             plugins: [
//               { removeDimensions: true }, // 如果有 viewbox 则不需要 width 和 height
//             ],
//           }),
//         ])
//       )
//     )
//     .pipe(
//       gulp.dest(file => {
//         return file.base; // 压缩到原目录
//       })
//     );
// });

// gulp.task('watch', () => {
//   gulp.watch(`${src}/**/*.css`, ['css']);
// });

// gulp.task('dev', ['css'], () => {
//   runSequence('watch');
// });

// gulp.task('nohost', () => {

// });
