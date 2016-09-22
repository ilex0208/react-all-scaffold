import analysisDemo from './../../../containers/biz/analysis/Demo';

const demo2Route = (store) => ({
  path: '/analysis/demo2',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, analysisDemo);
    }, 'analysisDemo2');
  }
});

export default demo2Route;
