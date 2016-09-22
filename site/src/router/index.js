// We only need to import the modules necessary for initial render
import App from './../containers/rootContainer';
import Home from './home';
import loginRoute from './auth/loginRoute';
import registerRoute from './auth/registerRoute';
import nmpsRoute from './nmps';
import operationRoute from './operation';
import analysisRoute from './analysis';
import coreRoute from './core';
import NotFound from './notfond';
import Redirect from './notfond/redirect';
import sysconfigRoute from './sysconfig';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: App,
  indexRoute: Home,
  childRoutes: [
    coreRoute(store),
    loginRoute(store),
    registerRoute(store),
    nmpsRoute(store),
    operationRoute(store),
    analysisRoute(store),
    sysconfigRoute(store),
    NotFound(),
    Redirect
  ]
});

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Nmps').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
