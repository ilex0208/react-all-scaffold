import React, { Component, PropTypes } from 'react';
import Echarts from 'echarts';
import elementResizeEvent from 'element-resize-event';
/**
 * react echarts基础组件
 */
class ReactEcharts extends Component {
  componentDidMount() {
    const chart = this._renderChart();
    // 设置resize
    elementResizeEvent(this.refs.chart, () => {
      chart.resize();
    });
    const { onReady } = this.props;
    if (typeof onReady === 'function') {
      onReady(chart);
    }
  }

  componentDidUpdate() {
    this._renderChart();
  }

  componentWillUnmount() {
    Echarts.dispose(this.refs.chart);
  }

  _renderChart() {
    const chartDom = this.refs.chart;
    const chart = Echarts.getInstanceByDom(chartDom) || Echarts.init(chartDom);
    const { onClick, option, showLoading } = this.props;
    if (onClick) {
      chart.off('click');
      chart.on('click', onClick);
    }
    chart.setOption(option);
    if (showLoading) {
      chart.showLoading();
    } else {
      chart.hideLoading();
    }
    return chart;
  }

  render() {
    return (
      <div ref='chart' style={this.props.chartStyle} className={this.props.chartDivClass}></div>
    );
  }
}

ReactEcharts.propTypes = {
  chartStyle: PropTypes.object.isRequired,
  option: PropTypes.object.isRequired,
  chartDivClass: PropTypes.string,
  showLoading: PropTypes.bool,
  onClick: PropTypes.func,
  onReady: PropTypes.func
};

export default ReactEcharts;
