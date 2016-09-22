import React,{PropTypes} from 'react';
import ReactEcharts from './../core/ReactEcharts';
import mergePieOps from './PieOpUtil';

/**
 * PieCharts组件
 * 采用function方式实现组件
 * @see doc/component.md
 */
const PieCharts = (props) => {
  let {chartStyle, pieOps, ...other} = props;
  let option = mergePieOps(pieOps);
  return (
    <ReactEcharts
      chartStyle={chartStyle}
      option={option}
      {...other}
    />
  );
};

PieCharts.propTypes = {
  chartStyle: PropTypes.object.isRequired,
  pieOps: PropTypes.object.isRequired
};

export default PieCharts;
