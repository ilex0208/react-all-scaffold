// import _ from 'lodash';
import * as _object from 'lodash/fp/object';// 只需要导入该包即可

/**
 * echarts默认公共属性设置
 * 设置统一样式
 */
export const defaultMapOps = {
  title: {
    textStyle: {
      fontSize: 18,
      fontWeight: 'bolder',
      color: '#ff7f50'          // 主标题文字颜色
    },
    x: 'left'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    x: 'left',
    y: '70%'
  },
  roamController: {
    show: true,
    x: 'right',
    mapTypeControl: {
      'china': true
    }
  },
  series: [
    {
      name: '紧急告警',
      type: 'map',
      itemStyle: {
        normal: { label: { show: true } },
        emphasis: { label: { show: true } }
      },
      data: []
    }]
};

/**
 * 合并后的options
 */
const mergeMapOps = (options) => _object.merge(defaultMapOps, options);

export function mergeMapOp(options) {
  return _object.merge(defaultMapOps, options);
}

export default mergeMapOps;
