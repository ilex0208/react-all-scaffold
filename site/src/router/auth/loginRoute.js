const loginRoute = (store) => ({
  path: 'login',

  getComponent(nextState, cb) {

    require.ensure([], (require) => {

      const login = require('./../../containers/auth/login').default;

      cb(null, login);

    }, 'login');
  }
});

export default loginRoute;
