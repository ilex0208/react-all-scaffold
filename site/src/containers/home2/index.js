import React, {Component} from 'react';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import {fetchPost} from 'mainUtils';
import './home.scss';
import design from './../../assets/home/design.png';
import coms from './../../assets/home/coms.png';
import ShowItem from './ShowItem';

const bannerUrl = '';

const mockDatas = [
  { ele: 'first', preFixCls: 'banner-user-elem', contents: { key: 'design', title: 'Ilex React -all', twone: design, btnValue: '了解更多', showItemUrl: 'design', description: '我们像是表面上的针，不停的转动，一面转，一面看着时间匆匆离去，却无能为力。' } },
  { ele: 'second', preFixCls: 'banner-user-elem', contents: { key: 'coms', title: 'Ilex React -all', twone: coms, btnValue: '了解更多', showItemUrl: 'coms', description: '生活就是做出选择，一旦你做出了你的选择，你就必须活在你的决定中' } }
];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationHeader: { y: 30, opacity: 0, type: 'from' },
      animationContent: { y: 30, opacity: 0, type: 'from', delay: 100 },
      bannerData: []
    };
  }

  /**
   * 客户端在初始化渲染之后立刻调用，更新组件
   */
  componentDidMount() {
    fetchPost(bannerUrl, bannerData => this._updateBanner(bannerData));
  }

  _updateBanner(data) {
    this.setState({ bannerData: data });
  }

  _generatEle(datas) {
    let elements = [];
    datas.map(data => {
      let {ele, preFixCls, bg, contents} = data;
      elements.push(
        <Element prefixCls={preFixCls} key={ele} bg={bg}>
          {this._generatTweenOne(contents)}
        </Element>
      );
    });
    return elements;
  }

  /**
   * 解析构建单个动画项
   */
  _generatTweenOne(contents) {
    let {key, twone, ...qaprops} = contents;
    // let {key, title, twone, btnValue, showItemUrl, description} = contents;
    return (
      <div>
        <TweenOne
          key={`to${key}`}
          className='image-tweenone-wrapper'
          animation={{ x: 0, opacity: 1, duration: 550 }}
          style={{ transform: 'translateX(-100px)', opacity: 0 }}
        >
          <img src={twone} alt='' />
        </TweenOne>
        <ShowItem qakey={`qa${key}`} {...qaprops} />
      </div>
    );
  }

  render() {
    return (
      <BannerAnim prefixCls="banner-user" type="grid" id='banner' autoPlay>
        {this._generatEle(mockDatas)}
      </BannerAnim>
    );
  }
}

export default Demo;
