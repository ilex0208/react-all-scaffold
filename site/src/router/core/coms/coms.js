import {ControlCenter} from './../../../containers/controlcenter';

const comsRoute = (store) => ({
  path: '/core/coms',
  /*  当路由匹配时,异步注入相应组件  */
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ControlCenter);
    }, 'coms');
  }
});
export default comsRoute;
