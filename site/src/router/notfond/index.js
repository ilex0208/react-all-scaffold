export default () => ({
  path: '404',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Notfound = require('./../../containers/common/notfound').default;
      cb(null, Notfound);
    });
  }
});
