##1.使用this.props.history
如果你调用History的Component是直接被react-router管理的话，你不需要mixin History。直接在this.props就有，这是自动加进来的

import { History } from 'react-router';

this.props.history.pushState(null, '/foo');


##2使用browserHistory
import { browserHistory } from 'react-router';
class Demo extends Component {
  ...
  handleSubmit() {
    browserHistory.push('要跳转到的path';
  }

  // 带参数
  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const list = event.target.elements[1].value;
    const path = `/lists/${userName}/${list}`;
    browserHistory.push(path);
  }
}


##在action中采用createBrowserHistory,前提是组件是采用history进行管理的

// history.js
import createBrowserHistory from 'history/lib/createBrowserHistory';
export default createBrowserHistory();

// actions.js
import history from './history'
history.replaceState(null, '/some/path');

##使用context对象

class Demo extends Component {
  ...
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    // ...
    this.context.router.push('要跳转到的path');
  }
}


