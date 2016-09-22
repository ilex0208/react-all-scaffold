import React, {Component, PropTypes} from 'react';

/**
 * 组件一般写法
 * @author ilex
 */
class MyComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0
    };
    this._handeClick = this._handeClick.bind(this);
  }

  _handeClick() {
    this.setState({count: this.state.conut + 1});
  }

  render() {
    let {name} = this.props;
    name = name || '按钮';
    return (
      <div>
        <input type='button' onClick={this._handeClick} value={name} />
        计数：{this.state.count}
      </div>
    );
  }
}
// props 验证
MyComponet.propTypes = {
  name:PropTypes.string
};
// 默认或初始化 props
MyComponet.defaultProps = {
  name:'点击我'
};

export default MyComponet;
