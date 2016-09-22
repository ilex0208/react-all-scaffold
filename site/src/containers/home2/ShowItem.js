import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { Icon, Button } from 'AptAntd';
import QueueAnim from 'rc-queue-anim';


class ShowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playScale:1, // 要在屏幕哪个区域开始播放， 0.5 为屏幕中间, 如果为 array 时 replay 为 true, [bottomenter, topleave] enter为进入是的播放点， topLeave 为出屏的比例(当前显示屏的上面一屏)的百分点。topLeave 必须大于等于 bottomEnter。
      hideProps:{ image: { reverse: true } },// v0.3.0 将 children 里的 hideProps 迁到这里，将 children 里通过切换 children 来做动画的做为默认(原来的：{ children: null })。如果是 rc-tween-one 通过倒放来切换动画(Group为前一种方法), 需要在此设置： { userKey: { reverse: true }} userKey 为你在标签上的 key。
      delay:300, // 整个动画的延时,以毫秒为单位
      duration:550, // 每个动画的时间,以毫秒为单位
      leaveReverse:true//出场时是否倒放,从最后一个 dom 开始往上播放
    };
  }

  render() {
    let {qakey, title, description, btnValue,showItemUrl} = this.props;
    return (
      <QueueAnim className="text-wrapper" delay={300} key={qakey} duration={550} leaveReverse>
        <h2 key="h2">{title}</h2>
        <p key="p" style={{ maxWidth: 310 }}>{description}</p>
        <div key="button">
          <Link to={`/apt/doc/${showItemUrl}`}>
            <Button type="primary" size="large">
              {btnValue}
              <Icon type="right" />
            </Button>
          </Link>
        </div>
      </QueueAnim>
    );
  }
}

ShowItem.propTypes = {
  qakey: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  btnValue: PropTypes.string,
  scrollName: PropTypes.string,
  showItemUrl: PropTypes.string
};

ShowItem.defaultProps = {
  title: '标题',
  description: '描述',
  btnValue: 'button',
  showItemUrl:'#'
};

export default ShowItem;
