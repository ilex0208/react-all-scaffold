// import _ from 'lodash';
import * as _object from 'lodash/fp/object';// 只需要导入该包即可

/**
 * echarts默认公共属性设置
 * 设置统一样式
 */
export const defaultLineOps = {
  tooltip: {
    trigger: 'item',
    formatter: function(params) {
      let date = new Date(params.value[0]);
      let data = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes();
      return data + '<br/>' + params.value[1];
    }
  },
  legend: { x: 'center', y: 'bottom' },
  grid: { left: '3%', right: '4%', top: '5%', bottom: '10%', containLabel: true },
  xAxis: [{
    type: 'time',
    interval: 30 * 60 * 1000 // 默认间隔为30分钟
  }],
  yAxis: { type: 'value', nameGap: 30, nameLocation: 'middle' }
};

/**
 * 合并后的options
 */
const mergeLineOps = (options) => _object.merge(defaultLineOps, options);

export function mergeLineOp(options) {
  return _object.merge(defaultLineOps, options);
}

export default mergeLineOps;
