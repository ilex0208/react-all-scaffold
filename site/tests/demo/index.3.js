import React, {Component} from 'react';
import defaultFetch from '../common/defaultFetch';

const defaultData = [
  {id:1,name:'ilex',age:23},
  {id:2,name:'ilex2',age:21},
  {id:3,name:'ilex3',age:24},
  {id:4,name:'ilex4',age:25}
];
const url = 'http://localhost:8080/api/users';

/**
 * 声明周期详解
 */
class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: defaultData,
      pollInterval: 20000
    };
    this.updataMonitorData = this.updataMonitorData.bind(this);
  }
  // 服务器端和客户端都只调用一次，在初始化渲染执行之前立刻调用。
  // 如果在这个方法内调用 setState，render() 将会感知到更新后的 state，将会执行仅一次，尽管 state 改变了
  componentWillMount() {
    this.updataMonitorData();
  }

  // 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
  // 在生命周期中的这个时间点，组件拥有一个 DOM 展现，你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
  // 如果想和其它 JavaScript 框架集成，使用 setTimeout 或者 setInterval 来设置定时器，或者发送 AJAX 请求，可以在该方法中执行这些操作。
  componentDidMount() {
    this.updataMonitorData();
    setInterval(this.updataMonitorData, this.state.pollInterval);
  }

  // componentWillReceiveProps(object nextProps)

  // componentWillUnmount

  componentWillUnmount() {

  }

  updataMonitorData() {
    defaultFetch(url, (monitorData) => {
      this._updataData(monitorData);
    });
  }
  render() {
    let users = this.state.userList;
    return (
      <div>
        用户信息：
        {users.map(user=><span>name:{user.name}</span>)}
      </div>
    );
  }
}

LifeCycle.propTypes = {

};

export default LifeCycle;
