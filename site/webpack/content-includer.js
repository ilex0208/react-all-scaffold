import path, {join} from 'path';
import fs, {readFile, writeFileSync} from 'fs';
import _debug from 'debug';

let options = options || {};

const debug = _debug('app:webpack:config');

export default class contentincluder {
  /**
   * 设置两个参数
   * @param {String} path 设置需要转换的文件路径
   * @param {String} includerReg 剔除内容的正则表达式
   */
  constructor(config) {
    debug('html插件开始执行');
    config = config || {};
    this.entry = config.entry;
    this.output = config.output;
    this.includerReg = config.includerReg;
    debug('html插件初始化成功');
  }
  replaceContent(content, dir) {
    debug(content);
    content = content.replace(contentincluder.REGEX, function(str, src) {
      if (/^[\\\/]/.test(src)) {
        if (options.resolvePath && typeof options.resolvePath === 'function') {
          src = options.resolvePath(src);
        } else {
          src = path.join(options.baseSrc || '', src);
        }
      } else {
        src = path.join(path.dirname(dir), src);
        src = path.resolve('./src', src);
      }

      try {
        var fileContent = fs.readFileSync(src, 'utf8');
        debug('嵌入的文件地址为' + src);
        debug('嵌入的文件内容为${fileContent}');
        if (options.deepConcat && this.REGEX.test(fileContent)) {
          return this.replaceContent(fileContent, src);
        }
        return fileContent;
      } catch (err) {
        // gutil.log(gutil.colors.red('[ERROR] the file %s required by %s is not exsist'), src, dir)
        return str;
      }
    });
    return content;
  }
  /**
 *
 * @param compiler
 */
  apply(compiler) {
    const folder = compiler.options.context;
    const entry = join(folder, this.entry);
    const output = join(folder, this.output);

    compiler.plugin('compilation', () => {
      readFile(entry, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          throw err;
        }
        let content = data;
        content = this.replaceContent(content, '');
        compiler.plugin('done', (stats) => {
          writeFileSync(output, content);
        });
      });
    });
  }
}

// 设置默认的正则表达式
contentincluder.REGEX = /<!\-\-include\s+"([^"]+)"\-\->/g;
