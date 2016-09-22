import {AddComponent} from './../../../containers/controlcenter';

const addComs = (store) => ({
  path: '/core/addCom',
  /*  当路由匹配时,异步注入相应组件  */
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, AddComponent);
    }, 'addCom');
  }
});
export default addComs;
