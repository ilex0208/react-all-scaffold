import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Form, Input, Button, Row } from 'AptAntd';
import { loginAuth, thirdAuth, getPermissions } from './../../../action/authAction';
import './login.scss';

const createForm = Form.create();
const FormItem = Form.Item;

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user && nextProps.user.api_key && nextProps.user.id) {
      this.props.getPermissions();
    }
    if(nextProps.permissions && nextProps.permissions.urls) {
      if(this.props.goto) {
        this.props.goto();
      } else {
        this.context.router.replace('/home');
      }
    }
    // const user = nextProps.user;
    // if (user) {
    //   this.context.router.replace('/home');
    // }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('Errors in form!!!');
        return;
      }
      this.props.loginAuth(values);
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    const nameProps = getFieldProps('userName', {
      rules: [
        { required: true, message: '请填写用户名' }
      ]
    });
    const passwdProps = getFieldProps('password', {
      rules: [
        { required: true, whitespace: true, message: '请填写密码' }
      ]
    });
    return (
      <div className="login-box">
        <Form inline onSubmit={this.handleSubmit}>
          <Row>
            <FormItem label="用户名：" hasFeedback labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input {...nameProps} />
            </FormItem>
          </Row>
          <Row>
            <FormItem label="密　码：" hasFeedback labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Input {...passwdProps} type="password" autoComplete="off" onContextMenu={false} onPaste={false} onCopy={false} onCut={false} />
            </FormItem>
          </Row>
          <FormItem>
            <Button className="btn-login" type="primary" htmlType="submit">登录</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

LoginComponent.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

LoginComponent.propTypes = {
  form: PropTypes.any,
  userName: PropTypes.string,
  getPermissions: PropTypes.func,
  goto: PropTypes.any,
  loginAuth: PropTypes.func
};

function mapStateToProps(state) {
  const {user,permissions} = state;
  return {
    user: user,
    permissions: permissions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginAuth: bindActionCreators(loginAuth, dispatch),
    thirdAuth: bindActionCreators(thirdAuth, dispatch),
    getPermissions: bindActionCreators(getPermissions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(createForm(LoginComponent));
