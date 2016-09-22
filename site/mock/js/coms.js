import React from 'react';
import {Link} from 'react-router';
import { message, Button, Icon } from 'AptAntd';

/**
 * 创建表格操作项
 */
const operateCol = (text,record) =>(
  <div className="operation-buttons">
    <Link to={`/core/editCom/${record.key}`} className="ant-btn ant-btn-ghost flat edit-button">
      <div className="icon-wrapper">
        <Icon type="edit" />
      </div>
    </Link>

    <span className="seperate-line"></span>
    <Button className="flat delete-button" type="ghost" onClick={()=>message.success('删除成功!')}>
      <div className="icon-wrapper">
        <Icon type="cross" />
      </div>
    </Button>
  </div>
);

/**
 * 组件表格列
 */
export const COMS_COL = [
  {
    title: '组件名称',
    width: '25%',
    dataIndex: 'comsName'
  }, {
    title: '组件类别',
    width: '25%',
    dataIndex: 'comsType'
  }, {
    title: '组件价格',
    width: '25%',
    dataIndex: 'comsCost'
  }, {
    title: '操作',
    width: '25%',
    dataIndex: 'operateComs',
    render: (text,record) => operateCol(text,record)
  }];

const comsData = () => {
  let data = [];
  data.push({key: 1,comsName: '基础信息', comsType: '基础类',comsCost: 'Free',operateComs: ''});
  data.push({key: 2,comsName: '状态监控', comsType: '监控类',comsCost: '￥100.0/天',operateComs: ''});
  data.push({key: 3,comsName: '在线检测', comsType: '检测类',comsCost: '￥299.0/天',operateComs: ''});
  data.push({key: 4,comsName: '在线校验', comsType: '校验类',comsCost: '￥999.0/天',operateComs: ''});
  return data;
};

export const COMS_DATA = comsData();
