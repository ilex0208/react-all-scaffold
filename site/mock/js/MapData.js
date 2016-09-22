/**
 * map地图option
 * es6箭头函数写法
 * @author ilex
 */
const mapOptions = () => {
  return ({
    title: {
      text: '市站点拓扑图',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bolder',
        color: '#ff7f50'          // 主标题文字颜色
      },
      x: 'left'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      y: '70%',
      data: ['紧急告警', '主要告警', '次要告警', '警告告警']
    },
    roamController: {
      show: true,
      x: 'right',
      mapTypeControl: {
        'china': true
      }
    },
    series: [
      {
        name: '紧急告警',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: { label: { show: true } },
          emphasis: { label: { show: true } }
        },
        data: [
          { name: '黑龙江', value: getValue() },
          { name: '湖南', value: getValue() },
          { name: '安徽', value: getValue() },
          { name: '山东', value: getValue() },
          { name: '新疆', value: getValue() },
          { name: '江苏', value: getValue() },
          { name: '浙江', value: getValue() },
          { name: '江西', value: getValue() },
          { name: '湖北', value: getValue() },
          { name: '广西', value: getValue() },
          { name: '甘肃', value: getValue() }
        ]
      },
      {
        name: '主要告警',
        type: 'map',
        mapType: 'china',
        roam: false,
        itemStyle: {
          normal: { label: { show: true } },
          emphasis: { label: { show: true } }
        },
        data: [
          { name: '北京', value: getValue() },
          { name: '天津', value: getValue() },
          { name: '上海', value: getValue() },
          { name: '重庆', value: getValue() },
          { name: '河北', value: getValue() },
          { name: '河南', value: getValue() },
          { name: '云南', value: getValue() },
          { name: '辽宁', value: getValue() },
          { name: '黑龙江', value: getValue() },
          { name: '湖南', value: getValue() },
          { name: '安徽', value: getValue() },
          { name: '山东', value: getValue() },
          { name: '新疆', value: getValue() },
          { name: '江苏', value: getValue() },
          { name: '浙江', value: getValue() },
          { name: '江西', value: getValue() },
          { name: '湖北', value: getValue() },
          { name: '广西', value: getValue() },
          { name: '甘肃', value: getValue() },
          { name: '山西', value: getValue() },
          { name: '内蒙古', value: getValue() },
          { name: '陕西', value: getValue() },
          { name: '吉林', value: getValue() },
          { name: '福建', value: getValue() },
          { name: '贵州', value: getValue() },
          { name: '广东', value: getValue() },
          { name: '青海', value: getValue() },
          { name: '西藏', value: getValue() },
          { name: '四川', value: getValue() },
          { name: '宁夏', value: getValue() },
          { name: '海南', value: getValue() },
          { name: '台湾', value: getValue() },
          { name: '香港', value: getValue() },
          { name: '澳门', value: getValue() }
        ]
      },
      {
        name: '警告告警',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: { label: { show: true } },
          emphasis: { label: { show: true } }
        },
        data: [
          { name: '北京', value: getValue() },
          { name: '天津', value: getValue() },
          { name: '上海', value: getValue() },
          { name: '重庆', value: getValue() },
          { name: '河北', value: getValue() },
          { name: '安徽', value: getValue() },
          { name: '新疆', value: getValue() },
          { name: '浙江', value: getValue() },
          { name: '江西', value: getValue() },
          { name: '山西', value: getValue() },
          { name: '内蒙古', value: getValue() },
          { name: '吉林', value: getValue() },
          { name: '福建', value: getValue() },
          { name: '广东', value: getValue() },
          { name: '西藏', value: getValue() },
          { name: '四川', value: getValue() },
          { name: '宁夏', value: getValue() },
          { name: '香港', value: getValue() },
          { name: '澳门', value: getValue() }
        ]
      },
      {
        name: '次要告警',
        type: 'map',
        mapType: 'china',
        itemStyle: {
          normal: { label: { show: true } },
          emphasis: { label: { show: true } }
        },
        data: [
          { name: '北京', value: getValue() },
          { name: '天津', value: getValue() },
          { name: '上海', value: getValue() },
          { name: '广东', value: getValue() },
          { name: '台湾', value: getValue() },
          { name: '香港', value: getValue() },
          { name: '澳门', value: getValue() }
        ]
      }
    ]
  });
};

const getValue = () => Math.round(Math.random() * 1000);

const defaultOp = mapOptions();

export default defaultOp;
