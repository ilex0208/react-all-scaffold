import React,{PropTypes} from 'react';
import ReactEcharts from './../core/ReactEcharts';
import mergeLineOps from './lineOpUtil';

/**
 * LineCharts组件
 * 采用function方式实现组件
 * @see doc/component.md
 */
const LineCharts = (props) => {
  let {chartStyle, lineOps, ...other} = props;
  let option = mergeLineOps(lineOps);
  return (
    <ReactEcharts
      chartStyle={chartStyle}
      option={option}
      {...other}
    />
  );
};

LineCharts.propTypes = {
  chartStyle: PropTypes.object.isRequired,
  lineOps: PropTypes.object.isRequired
};

export default LineCharts;
