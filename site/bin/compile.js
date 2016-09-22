import fs from 'fs-extra';
import _debug from 'debug';
import webpackCompiler from '../webpack/webpack-compiler';
import webpackConfig from '../webpack/webpack.config';
import config from '../config';

const debug = _debug('app:bin:compile');
const paths = config.utils_paths;

(async function () {
  try {
    debug('运行编译器');
    const stats = await webpackCompiler(webpackConfig);
    if (stats.warnings.length && config.compiler_fail_on_warning) {
      debug('Config set to fail on warning, exiting with status code "1".');
      process.exit(1);
    }
    debug('Copy assets to dist folder.');
    fs.copySync(paths.client('assets'), paths.dist());
    debug('Copy mock to dist folder.');
    fs.copySync(paths.mock(), paths.dist()+'/mock');
  } catch (e) {
    debug('Compiler encountered an error.', e);
    process.exit(1);
  }
})();
