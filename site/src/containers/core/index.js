import React, {Component, PropTypes} from 'react';
import {fetchPost} from 'mainUtils';
import NavMenu from './../../components/common/nav';
import {cores} from './../../configer/urlconfiger';
import './index.scss';
/**
 * 系统核心模块
 */
class Core extends Component {
  state = {
    corenavs: {}
  };

  componentDidMount() {
    fetchPost(cores, (data) => this.setState({ corenavs: data }));
  }

  handleClick = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className='cores'>
        <div className='core-nav'>
          <NavMenu handleClick={this.handleClick} {...this.state.corenavs} />
        </div>
        <div className='core-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Core.propTypes = {
  children: PropTypes.any
};

export default Core;
