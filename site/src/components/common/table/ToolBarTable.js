import React, {Component, PropTypes} from 'react';
import {Table} from 'AptAntd';
import {SimpleToolBar} from './../toolBar';
import './style/table.css';

/**
 * 带toolBar的table
 * 不进行分页,表格类型(中号表格（紧凑型）、小号表格)
 */
class ToolBarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPagination: false,
      config:{
        tableSize : 'default'
      }
    };
  }

  render() {
    let { tableColumns, dataList, toolBarPic, toolBarInfo, tableSize, isGap2Top } = this.props;
    tableSize = tableSize || this.state.config.tableSize;
    const spanTable = isGap2Top ? 'table-span' : '';
    return (
      <div className={spanTable}>
        <SimpleToolBar toolBarPic={toolBarPic} toolBarInfo={toolBarInfo} />
        <Table
          columns={tableColumns}
          dataSource={dataList}
          bordered
          pagination={this.state.isPagination}
          size={tableSize}
        />
      </div>
    );
  }
}

ToolBarTable.propTypes = {
  tableColumns: PropTypes.array,
  dataList: PropTypes.array,
  // 分为 default middle small
  tableSize: PropTypes.string,
  toolBarPic:PropTypes.string,
  toolBarInfo:PropTypes.string,
  // 距离顶部有间隙 为空或false代表默认则无间隙，true时margin-top:0.5em
  isGap2Top: PropTypes.boolean
};

export default ToolBarTable;
