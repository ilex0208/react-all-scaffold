import React, {Component, PropTypes} from 'react';
import { TreeSelect } from 'AptAntd';
import './style/select.scss';

const mockData = [
  {
    label: '测试线路',
    value: '0-0',
    key: '0-0',
    children: [
      {label: '站点1',value: '0-0-1',key: '0-0-1'},
      {label: '站点2',value: '0-0-2',key: '0-0-2'}
    ]
  },
  {
    label: '测试线路2',
    value: '0-1',
    key: '0-1',
    children: [
      {label: '站点2-1',value: '0-1-1',key: '0-1-1'},
      {label: '站点2-2',value: '0-1-2',key: '0-1-2'}
    ]
  }
];


/**
 * 选择站点 selector
 * (是一种树形选择)
 */
class SiteSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:'',
      _selectStyle:{width: '200px'},
      _dropdownStyle:{ maxHeight: '400px', overflow: 'auto' }
    };
  }

  _onChange = (value) => {
    console.log(arguments);
    this.setState({ value });
  }

  render() {
    let {selTips, placeholder, treeData, selectStyle, ...other} = this.props;
    const _style = selectStyle || this.state._selectStyle;
    return (
      <div className='tree-selector'>
        <span className='sel-tips'>{selTips}</span>
        <TreeSelect
          style={_style}
          value={this.state.value}
          dropdownStyle={this.state._selectStyle}
          treeData={treeData}
          placeholder={placeholder}
          treeDefaultExpandAll
          onChange={this._onChange}
          {...other}
        />
      </div>
    );
  }
}

SiteSelect.propTypes = {
  selTips: PropTypes.string,
  placeholder: PropTypes.string,
  treeData: PropTypes.array,
  selectStyle:PropTypes.object
};

SiteSelect.defaultProps = {
  selTips: '请选择:',
  placeholder: '请选择',
  treeData: mockData
};

export default SiteSelect;
