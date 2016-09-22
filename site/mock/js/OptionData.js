
/**
 * 通过监视类型获取指定图表的配置项和数据
 * @param{object} monitorType 监视类型 (如:单位:V)
 * @author ilex
 */
export const generateChart = (monitorType) => {
  return ({
    legend: { data: ['A相', 'B相', 'C相'] },
    xAxis: [{axisLabel: { formatter: formatterValue }}],
    yAxis: { name: '单位:V' },
    series: [
      { name: 'A相', type: 'line', stack: '电量', data: commonData() },
      { name: 'B相', type: 'line', stack: '电量', data: commonData() },
      { name: 'C相', type: 'line', stack: '电量', data: data2() }
    ]
  });
};

/**
 * 指定图表的配置项和数据(单位:V)
 * es6箭头函数写法
 * @author ilex
 */
const chartOptions = () => {
  return ({
    legend: { data: ['A相', 'B相', 'C相'] },
    xAxis: [{axisLabel: { formatter: formatterValue }}],
    yAxis: { name: '单位:V' },
    series: [
        { name: 'A相', type: 'line', stack: '电量', data: commonData() },
        { name: 'B相', type: 'line', stack: '电量', data: commonData() },
        { name: 'C相', type: 'line', stack: '电量', data: data2() }
    ]
  });
};

/**
 * 获取指定图表的配置项和数据(单位:V),原始function写法
 * @author ilex
 */
function chartOptionsFunc() {
  // 日视图
  let dayView = {
    legend: { data: ['A相', 'B相', 'C相'] },
    xAxis: [{axisLabel: { formatter: formatterValue }}],
    yAxis: { name: '单位:V' },
    series: [
      { name: 'A相', type: 'line', stack: '电量', data: commonData() },
      { name: 'B相', type: 'line', stack: '电量', data: commonData() },
      { name: 'C相', type: 'line', stack: '电量', data: data2() }
    ]
  };
  return dayView;
}

const data2 = () => {
  let dataY = [0, 10, 20, 30, 40, 50, 60, 70, 80];
  let data = [];
  let now = new Date(2016, 4, 6);
  let oneDay = 1800 * 10000;
  let value = Math.random() * 1000;
  for (let i = 0; i < 3; i++) {
    data.push(randomData(i, now, value, oneDay, dataY));
  }
  return data;
};

/**
 * 获取随机数据
 */
function randomData(K, now, value, oneDay, dataY) {
  now = new Date(now + oneDay);
  value = value + Math.random() * 21 - 10;
  return [
    new Date(2016, 4, 6, 0, K * 100),
    dataY[K]
  ];
}

/**
 * 获取简单数据
 */
const commonData = () => {
  let d = [];
  let len = 0;
  while (len++ < 4) {
    d.push([
      new Date(2016, 4, 6, 0, len * 100),
      (Math.random() * 30).toFixed(2) - 0,
      (Math.random() * 100).toFixed(2) - 0
    ]);
  }
  return d;
};

/**
 * 格式化日期
 */
const formatterValue = (value, index) => {
  // 格式化成月/日，只在第一个刻度显示年份
  let date = new Date(value);
  let texts = '';
  if (index === 0) {
    texts = date.format('MM-dd hh:mm');
  } else {
    texts = date.format('hh:mm');
  }
  return texts;
};


/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * 例子:(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *     (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
 * 调用:let time1 = new Date().Format("yyyy-MM-dd");
 *     let time2 = new Date().Format("yyyy-MM-dd HH:mm:ss");
 * @param {Object} fmt
 */
Date.prototype.format = function(formatStr) {
  let temp = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(formatStr)) {
    formatStr = formatStr.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in temp) {
    if (new RegExp('(' + k + ')').test(formatStr)) {
      formatStr = formatStr.replace(RegExp.$1, (RegExp.$1.length === 1) ? (temp[k]) : (('00' + temp[k]).substr(('' + temp[k]).length)));
    }
  }
  return formatStr;
};

export const volOptionsFunc = chartOptionsFunc();

export default {
  volOptions: chartOptions()
};
