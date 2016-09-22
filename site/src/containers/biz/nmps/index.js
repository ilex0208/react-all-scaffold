import React, {Component, PropTypes} from 'react';
import LeftNav from './LeftNav';
import './index.scss';
/**
 * 对nmps进行组装
 */
class Nmps extends Component {

  render() {
    let {children} = this.props;
    return (
      <div className="second-wrapper">
        <div className="second-container">
          <aside className="left-nav">
            <LeftNav />
          </aside>
          <div className="right-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Nmps.propTypes = {
  children: PropTypes.any
};

export default Nmps;
