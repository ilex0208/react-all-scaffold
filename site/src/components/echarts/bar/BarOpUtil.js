// import _ from 'lodash';
import * as _object from 'lodash/fp/object';// 只需要导入该包即可

/**
 * echarts默认公共属性设置
 * 设置统一样式
 */
export const defaultBarOps = {
 
};

/**
 * 合并后的options
 */
const mergeBarOps = (options) => _object.merge(defaultBarOps, options);

export function mergeBarOp(options) {
  return _object.merge(defaultBarOps, options);
}

export default mergeBarOp;
