const sysconfigRoute = (store) => ({
  path: 'sysconfig',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      const Sysconfig = require('./../containers/home2').default;
      cb(null, Sysconfig);
    }, 'sysconfig');
  }
});

export default sysconfigRoute;
