import React, {Component, PropTypes} from 'react';
import {Table} from 'AptAntd';
import './style/table.css';

/**
 * 简单table
 * 不进行分页,表格类型(中号表格（紧凑型）、小号表格)
 */
class SimpleTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPagination: false,
      config: {
        tableSize: 'default'
      }
    };
  }

  render() {
    let { tableColumns, dataList, tableSize } = this.props;
    tableSize = tableSize || this.state.config.tableSize;
    return (
      <Table
        columns={tableColumns}
        dataSource={dataList}
        bordered
        pagination={this.state.isPagination}
        size={tableSize}
      />
    );
  }
}

SimpleTable.propTypes = {
  tableColumns: PropTypes.array,
  dataList: PropTypes.array,
  // 分为 default middle small
  tableSize: PropTypes.string
};

export default SimpleTable;
