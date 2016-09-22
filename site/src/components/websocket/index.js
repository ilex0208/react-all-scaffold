/**
 * @author fe-tiangonglei
 * @description react中websocket实现
 * 使用教程
 *  handleData(data) {
 *    let result = JSON.parse(data);
 *    this.setState({count: this.state.count + result.movement});
 *  }
 *  <ReactWebSocket url='ws://localhost:8888/' onMessage={this.handleData} reconnect={true} debug={true}/>
 */
import React,{Component, PropTypes} from 'react';

/**
 * 采用React实现的websocket
 * @class ReactWebSocket
 * @extends {Component}
 */
class ReactWebSocket extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ws: new WebSocket(this.props.url, this.props.protocol),
      attempts: 1
    };
  }

  componentDidMount() {
    this.setupWebsocket();
  }

  /**
   *组件被移除之前被调用
   */
  componentWillUnmount() {
    let websocket = this.state.ws;
    websocket.close();
  }

  setupWebsocket() {
    let websocket = this.state.ws;

    websocket.onopen = () => {
      this.logging('Websocket connected');
    };

    websocket.onmessage = (evt) => {
      this.props.onMessage(evt.data);
    };

    websocket.onclose = () => {
      this.logging('Websocket disconnected');
      if (this.props.reconnect) {
        let time = this.generateInterval(this.state.attempts);
        setTimeout(() => {
          this.setState({ attempts: this.state.attempts++ });
          this.setupWebsocket();
        }, time);
      }
    };
  }

  logging(logline) {
    if (this.props.debug === true) {
      console.log(logline);
    }
  }

  generateInterval(k) {
    return Math.min(30, (Math.pow(2, k) - 1)) * 1000;
  }

  render() {
    return (
      <div></div>
    );
  }
}

ReactWebSocket.defaultProps = {
  debug: false,
  reconnect: true
};

ReactWebSocket.propTypes = {
  url: PropTypes.string.isRequired,
  onMessage: PropTypes.func.isRequired,
  debug: PropTypes.bool,
  reconnect: PropTypes.bool,
  protocol: PropTypes.string
};

export default ReactWebSocket;
