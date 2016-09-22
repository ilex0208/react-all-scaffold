import React from 'react';

const prifix = 'http://localhost:8080/home/left';

/**
 * 状态监控
 */
export const STATUS_COL = [
  {
    title: '关口类别',
    width: '40%',
    dataIndex: 'gatewayType'
  }, {
    title: '计量点',
    width: '15%',
    dataIndex: 'measuringPoint',
    render(text) {
      let url = prifix + '/1/' + text;
      return <a href={url} target='_blank'>{text}</a>;
    }
  }, {
    title: '运行中',
    width: '15%',
    dataIndex: 'running',
    render(text) {
      let url = prifix + '/1/' + text;
      return <a href={url} target='_blank'>{text}</a>;
    }
  }, {
    title: '停运',
    width: '15%',
    dataIndex: 'off',
    render(text) {
      let url = prifix + '/1/' + text;
      return <a href={url} target='_blank'>{text}</a>;
    }
  }, {
    title: '异常',
    width: '15%',
    dataIndex: 'exception',
    render(text) {
      let url = prifix + '/1/' + text;
      return <a href={url} target='_blank'>{text}</a>;
    }
  }];

export const statusData = () => {
  let data = [];
  data.push({key: 1,gatewayType: '省调发电上网关口', measuringPoint: 5,running: 1,off: 2,exception: 8});
  data.push({key: 2,gatewayType: '地调发电上网关口', measuringPoint: 2,running: 1,off: 2,exception: 8});
  data.push({key: 3,gatewayType: '跨省输电关口', measuringPoint: 3,running: 2,off: 2,exception: 8});
  data.push({key: 4,gatewayType: '省对地关口', measuringPoint: 8,running: 3,off: 2,exception: 8});
  data.push({key: 5,gatewayType: '地地关口', measuringPoint: 1,running: 3,off: 2,exception: 8});
  data.push({key: 6,gatewayType: '地县关口', measuringPoint: 1,running: 2,off: 2,exception: 8});
  data.push({key: 7,gatewayType: '县县关口', measuringPoint: 1,running: 1,off: 2,exception: 8});
  data.push({key: 8,gatewayType: '大用户关口', measuringPoint: 8,running: 2,off: 2,exception: 8});
  data.push({key: 9,gatewayType: '合计', measuringPoint: 29,running: 15,off: 10,exception: 64});
  return data;
};

/**
 * 关口电量
 */
export const POWER_COL = [
  {
    title: '关口电量类型',
    width: '50%',
    dataIndex: 'powerType'
  }, {
    title: '电量(KW/h)',
    width: '50%',
    dataIndex: 'powerResult'
  }];

export const powerData = () => {
  let data = [];
  data.push({key: 1,powerType: '全网上网电量', powerResult: '67.92KW/h'});
  data.push({key: 2,powerType: '全网用电量', powerResult: '-3146.28KW/h'});
  data.push({key: 3,powerType: '500Kv网络损耗', powerResult: '3214.20KW/h'});
  data.push({key: 4,powerType: '跨省输入电量', powerResult: '--'});
  data.push({key: 5,powerType: '跨省输出电量', powerResult: '--'});
  data.push({key: 6,powerType: '变电站母线平衡', powerResult: '-23.16%'});
  return data;
};

/**
 * 电能质量分析 PQA
 */
export const PQA_COL = [
  {
    title: '电能质量分析类型',
    width: '50%',
    dataIndex: 'pqaType'
  }, {
    title: '分析结果',
    width: '50%',
    dataIndex: 'pqaResult'
  }];

const pqaData = () => {
  let data = [];
  data.push({key: 1,pqaType: '电压合格率', pqaResult: '20%'});
  data.push({key: 2,pqaType: '全网频率', pqaResult: '--'});
  data.push({key: 3,pqaType: '电压谐波畸变率', pqaResult: '2.5%'});
  return data;
};

export const STATUS_DATA = statusData();
export const POWER_DATA = powerData();
export const PQA_DATA = pqaData();
