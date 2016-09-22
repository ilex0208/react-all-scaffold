import WebpackHotMiddleware from 'webpack-hot-middleware';
import applyExpressMiddleware from '../lib/apply-express-middleware';
import _debug from 'debug';

const debug = _debug('app:server:webpack-hmr');

export default function(compiler, opts) {
  debug('启动 WebPack热启动替换 (HMR).');

  const middleware = WebpackHotMiddleware(compiler, opts);
  return async function koaWebpackHMR(ctx, next) {
    let hasNext = await applyExpressMiddleware(middleware, ctx.req, ctx.res);

    if (hasNext && next) {
      await next();
    }
  };
}
