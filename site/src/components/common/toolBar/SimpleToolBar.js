import React, {Component, PropTypes} from 'react';

/**
 * 简单toolbar
 * img + desc
 */
class SimpleToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolBarAlt:'tool bar'
    };
  }

  render() {
    let {toolBarPic, toolBarInfo} = this.props;
    const alt = toolBarInfo || this.state.toolBarAlt;
    return (
      <div className='table-toolbar'>
        <span className='title'>
          <img alt={alt} src={toolBarPic} />
          {toolBarInfo}
        </span>
      </div>
    );
  }
}

SimpleToolBar.propTypes = {
  toolBarPic: PropTypes.string,
  toolBarInfo: PropTypes.string
};

export default SimpleToolBar;
