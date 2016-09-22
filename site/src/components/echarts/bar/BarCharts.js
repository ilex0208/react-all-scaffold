import React,{PropTypes} from 'react';
import ReactEcharts from './../core/ReactEcharts';
import mergeBarOp from './BarOpUtil';

/**
 * LineCharts组件
 * 采用function方式实现组件
 * @see doc/component.md
 */
const BarCharts = (props) => {
  let {chartStyle, barOps, ...other} = props;
  let option = mergeBarOp(barOps);
  return (
    <ReactEcharts
      chartStyle={chartStyle}
      option={option}
      {...other}
    />
  );
};

BarCharts.propTypes = {
  chartStyle: PropTypes.object.isRequired,
  barOps: PropTypes.object.isRequired
};

export default BarCharts;
