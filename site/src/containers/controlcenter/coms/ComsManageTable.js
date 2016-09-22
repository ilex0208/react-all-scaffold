import React, {PropTypes} from 'react';
import { message, Button, Icon } from 'AptAntd';
import {Link} from 'react-router';
import {SimpleTable} from './../../../components/common/table';

/**
 * 删除一个组件
 */
const deleteComs = () => message.success('删除成功');

/**
 * 创建表格操作项
 * link跳转还可以这样写: <Link to={`/editcom/${record.key}`}>{record.comsName}</Link>
 */
const operateCol = (text,record) =>(
  <div className="operation-buttons">
    <Link to='/control/editCom' params={{id:record.key}} className="ant-btn ant-btn-ghost flat edit-button">
      <div className="icon-wrapper">
        <Icon type="edit" />
      </div>
    </Link>

    <span className="seperate-line"></span>
    <Button className="flat delete-button" type="ghost" onClick={deleteComs}>
      <div className="icon-wrapper">
        <Icon type="cross" />
      </div>
    </Button>
  </div>
);

/**
 * 组件管理表格
 */
const comsColumns = [
  {title: '组件名称',width: '25%',dataIndex: 'comsName'},
  {title: '组件类别',width: '25%',dataIndex: 'comsType'},
  {title: '组件价格',width: '25%',dataIndex: 'comsCost'},
  {title: '操作',width: '25%',dataIndex: 'operateComs',render: (text,record) => operateCol(text,record)}
];

const ComsManageTable = props => {
  const {datas} = props;
  return (
    <SimpleTable
      tableColumns={comsColumns}
      dataList={datas}
    />
  );
};

ComsManageTable.propTypes = {
  datas:PropTypes.array
};

export default ComsManageTable;
