import React, {Component, PropTypes} from 'react';
// <SimpleTable tableColumns={COMS_COL} dataList={COMS_DATA} />
import {SimpleTable} from './../../../components/common/table';
// import {ComsManageTable} from './ComsManageTable';
import {COMS_COL, COMS_DATA} from './../../../../mock/js/coms';
import { Card, Icon } from 'AptAntd';
import {Link} from 'react-router';
import './coms.scss';

const cardExtra = (btnValue,comNums)=>(
  <div className="control-top-tool">
    <span style={{ marginRight: 30 }}>组件信息>已添加组件数:{comNums}</span>
    <Link to="/core/addCom" className="ant-btn ant-btn-primary ant-btn-lg">
      <Icon type="plus" />
      <span style={{ marginLeft: 5 }}>{btnValue}</span>
    </Link>
  </div>
);

/**
 * 后台控制中心
 */
class ControlCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnValue:'添加组件',
      _style:{},
      _cardBodyStyle:{
        padding: 0,
        marginTop: '5rem'
      }
    };
  }

  render() {
    const btnValue = this.state.btnValue;
    const nums = COMS_DATA.length;
    return (
      <div id="controlCenter">
        <Card extra={cardExtra(btnValue,nums)} bodyStyle={this.state._cardBodyStyle}>
          <div className="contorl-content">
            <SimpleTable tableColumns={COMS_COL} dataList={COMS_DATA} />
          </div>
        </Card>
      </div>
    );
  }
}

ControlCenter.propTypes = {

};

export default ControlCenter;
