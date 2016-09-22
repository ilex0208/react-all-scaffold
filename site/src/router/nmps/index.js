// import { injectReducer } from '../../store/reducers';

const nmpsRoute = (store) => ({
  path: 'nmps',
  /*  Async getComponent is only invoked when route matches   */
  getComponent(nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Nmps = require('./../../containers/biz/nmps').default;
      // const reducer = require('reducers/runtimeReducer').default;

      /*  Add the reducer to the store on key 'nmps'  */
      // injectReducer(store, { key: 'nmps', reducer });

      /*  Return getComponent   */
      cb(null, Nmps);

      /* Webpack named bundle   */
    }, 'nmps');
  }
});

export default nmpsRoute;
