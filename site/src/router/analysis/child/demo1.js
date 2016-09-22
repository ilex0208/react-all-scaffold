import analysisDemo from './../../../containers/biz/analysis/Demo';

const demo1Route = (store) => ({
  path: '/analysis/demo1',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, analysisDemo);
    }, 'analysisDemo1');
  }
});

export default demo1Route;
