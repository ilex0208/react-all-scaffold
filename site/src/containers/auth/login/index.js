import React, { PropTypes } from 'react';
import LoginComponent from './LoginComponent';
import { Row, Col } from 'AptAntd';
import './index.scss';
import loginurl from './login1.jpg';

const Login = props => {
  return (
    <div className="login">
      <h1 className="login-title">Ilex 测试</h1>
      <Row>
        <Col span="10" offset="2" className="login-img">
          <img alt='' src={loginurl} />
        </Col>
        <Col span="10" className="login-box">
          <LoginComponent />
        </Col>
      </Row>
    </div>
  );
};

Login.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default Login;
