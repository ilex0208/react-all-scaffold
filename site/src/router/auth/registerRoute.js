const registerRoute = (store) => ({
  path: 'register',

  getComponent(nextState, cb) {

    require.ensure([], (require) => {

      const register = require('./../../containers/auth/register').default;

      cb(null, register);

    }, 'register');
  }
});

export default registerRoute;
