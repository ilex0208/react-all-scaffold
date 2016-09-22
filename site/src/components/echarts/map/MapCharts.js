import React, { Component, PropTypes } from 'react';
import ReactEcharts from './../core/ReactEcharts';
import mergeMapOps from './mapOpUtil';
import 'echarts/map/js/china';
/**
 * react echarts基础组件
 * line
 */
class MapCharts extends Component {

  render() {
    let {chartStyle, mapOps, ...other} = this.props;
    let option = mergeMapOps(mapOps);
    return (
      <ReactEcharts
        chartStyle={chartStyle}
        option={option}
        {...other}
      />
    );
  }
}

MapCharts.propTypes = {
  chartStyle: PropTypes.object.isRequired,
  mapOps: PropTypes.object.isRequired
};

export default MapCharts;
