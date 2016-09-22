import React, {Component, PropTypes} from 'react';
import {Table} from 'AptAntd';

/**
 * 公共table
 * 带checkbox列
 */
class CommonTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: []
    };
  }

  // checkbox状态
  _onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  render() {
    let { tableColumns, dataList } = this.props;
    let { selectedRowKeys } = this.state;
    let rowSelection = {
      selectedRowKeys,
      onChange: this._onSelectChange
    };
    let pagination = {
      total: dataList.length,
      showSizeChanger: true,
      onShowSizeChange(current, pageSize) {
        console.log('Current: ', current, '; PageSize: ', pageSize);
      },
      onChange(current) {
        console.log('Current: ', current);
      }
    };

    return (
      <Table rowSelection={rowSelection} columns={tableColumns} dataSource={dataList} bordered pagination={pagination} />
    );
  }
}

CommonTable.propTypes = {
  tableColumns: PropTypes.array,
  dataList: PropTypes.array
};

export default CommonTable;
