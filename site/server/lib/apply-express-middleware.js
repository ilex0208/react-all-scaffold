// Based on: https://github.com/dayAlone/koa-webpack-hot-middleware/blob/master/index.js
// Koa 中间件代码
export default function applyExpressMiddleware(fn, req, res) {
  const originalEnd = res.end;

  return new Promise((resolve) => {
    res.end = function() {
      originalEnd.apply(this, arguments);
      resolve(false);
    };
    fn(req, res, function() {
      resolve(true);
    });
  });
}
