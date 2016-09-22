/**
 * 顶部导航
 * 具体构造如下:
 * <header>
 *    <AsideTool />
 *    <MenuArticle />
 * </header>
 */
import React, {Component, PropTypes} from 'react';
import AsideTool from './AsideTool';
import MenuArticle from './MenuArticle';
import {fetchPost} from 'mainUtils';
import {navs} from './../../configer/urlconfiger';
import './header.scss';

class TopHeader extends Component {
  state = {
    asidenavs:{}
  };

  componentDidMount() {
    const islogin = false;
    fetchPost(navs,(data)=>this.setState({asidenavs:islogin ? data.loginaside : data.notloginaside}));
  }

  handleClick = (e)=>{
    console.log(e);
  }

  render() {
    return (
      <header className='header'>
        <AsideTool handleClick={this.handleClick} isLogin={false} asidenavs={this.state.asidenavs} />
        <MenuArticle />
      </header>
    );
  }
}

TopHeader.propTypes = {

};

export default TopHeader;
