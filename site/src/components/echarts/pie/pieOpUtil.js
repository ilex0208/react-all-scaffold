// import _ from 'lodash';
import * as _object from 'lodash/fp/object';// 只需要导入该包即可

/**
 * echarts默认公共属性设置
 * 设置统一样式
 */
export const defaultPieOps = {
 
};



/**
 * 合并后的options
 */
const mergePieOps = (options) => _object.merge(defaultPieOps, options);

export function mergePieOp(options) {
  return _object.merge(defaultPieOps, options);
}

export default mergePieOps;
