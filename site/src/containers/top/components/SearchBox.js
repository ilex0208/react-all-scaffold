/*
* 搜索框，使用：<SearchBox placeholder="input search text" onSearch={value => console.log(value)} style={{ width: 200 }} />
*/
import React, {Component, PropTypes} from 'react';
import { Input, Select, Button, Icon } from 'AptAntd';
const Option = Select.Option;
import classNames from 'classnames';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: '',
      focus: false,
      _style: {
        width: '23rem'
      }
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleFocusBlur = this._handleFocusBlur.bind(this);
  }

  _handleChange(value) {
    this.setState({ value });
    fetch(value, (data) => this.setState({ data }));
  }

  _handleSubmit() {
    window.location.href = 'search.html?k=' + this.state.value;
  }

  _handleFocusBlur(e) {
    this.setState({
      focus: e.target === document.activeElement
    });
  }

  render() {
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim()
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ant-search-input-focus': this.state.focus
    });
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <div className='ant-search-input-wrapper' style={this.state._style}>
        <Input.Group className={searchCls}>
          <Select
            combobox
            value={this.state.value}
            placeholder={this.props.placeholder}
            notFoundContent=''
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onChange={this._handleChange}
            onFocus={this._handleFocusBlur}
            onBlur={this._handleFocusBlur}
          >
            {options}
          </Select>
          <div className='ant-input-group-wrap'>
            <Button className={btnCls} onClick={this.handleSubmit}>
              <Icon type='search' />
            </Button>
          </div>
        </Input.Group>
      </div>
    );
  }
}

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  style: PropTypes.object
};

export default SearchBox;
