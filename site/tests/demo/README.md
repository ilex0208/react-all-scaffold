#此处存放部分教程
1、React组件的一般写法

>>>>>ES6 Calss

`----------------`
import React,{Component} from 'react';

class HelloMessage extends React {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

React.render(<HelloMessage name="Sebastian" />, mountNode);
`----------------`

>>>API
举例：
getInitialState ==> 在constructor中进行初始化
getDefaultProps ==> defaultProps作为构造器的属性实现
具体见如下代码
`----------------`
import React,{Component} from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};

    //在constructor中进行事件绑定（下文中的div中已经不运行采用`this._handleClick.bind(this)`来实现事件绑定）
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div onClick={this._handleClick}>
        Clicks: {this.state.count}
      </div>
    );
  }
}
Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 0 };
`----------------`




>>>>>ES7 Calss

将上述代码采用ES7语法进行实现，同时采用箭头函数
`----------------`
export class Counter extends React.Component {
  static propTypes = { initialCount: React.PropTypes.number };
  static defaultProps = { initialCount: 0 };
  state = { count: this.props.initialCount };

  //可以采用如下方式进行事件的初始化与绑定
  _handleClick = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div onClick={this._handleClick}>
        Clicks: {this.state.count}
      </div>
    );
  }
}

`----------------`
