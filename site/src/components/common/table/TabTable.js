import React, {Component, PropTypes} from 'react';
import { Tabs, Icon, Table } from 'AptAntd';
const TabPane = Tabs.TabPane;

const isPagination = false;
const middleSize = {tableSize: 'small'};

const TabContent = (props) =>{
  let { tableColumns, dataList } = props;
  return (
    <Table
      columns={tableColumns}
      dataSource={dataList}
      bordered
      pagination={isPagination}
      size={middleSize}
    />
  );
};

TabContent.propTypes = {
  tableColumns: PropTypes.array,
  dataList: PropTypes.array,
  tableSize: PropTypes.string
};


class TabTable extends Component {
  constructor(props) {
    super(props);
  }

  _generateTabs = (tabInfos) => {
    let tabs = [];
    tabInfos.map((tabInfo) => {
      tabs.push(
        <TabPane tab={<span><Icon type={tabInfo.tabType} />{tabInfo.displayName}</span>} key={tabInfo.key}>
          <TabContent {...tabInfo.tabContent} />
        </TabPane>);
    });
    return tabs;
  }

  render() {
    let {daKey, tabInfos} = this.props;
    const tabContents = tabInfos?this._generateTabs(tabInfos):null;
    return <Tabs defaultActiveKey={daKey}>{tabContents}</Tabs>;
  }
}

TabTable.propTypes = {
  daKey: PropTypes.string,
  tabInfos: PropTypes.object
};

export default TabTable;
