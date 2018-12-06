import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheet/App.css';
import { Row, Col, Form, Icon, Input, Button, Checkbox, Card, notification } from 'antd';
import Actions from '../actions/AuthenticationActions';
import { connect } from 'react-redux';

const FormItem = Form.Item;

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      init: true
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { dispatch } = this.props;
        this.setState({ init: false });
        dispatch(Actions.signInAction(values));
      }
    });
  }

  openNotificationWithIcon = (type, msg) => {
    notification[type]({
      message: 'Authentication',
      description: msg,
    });
  };

  componentWillReceiveProps(nextProps) {
    console.log('CALLLED :: ', nextProps);
    const { user } = nextProps;
    const { init } = this.state;
    if(user && !init) {
      const { msg, status, fetched } = user;
      if(fetched) {
        if(status) this.openNotificationWithIcon('success', msg);
        else this.openNotificationWithIcon('error', msg);
      }
      this.setState({ init: true });      
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Row type="flex" justify="center" align="middle" style={{ height: '600px' }}>
        <Col>
          <Card title="LOGIN" bordered={true} hoverable={true}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [{ required: true, message: 'Please input your email!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <a className="login-form-forgot" href="">Forgot password</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                Or <NavLink to='/register'>register now!</NavLink>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default connect(
  state => ({
    user: state.user
  })
)(WrappedNormalLoginForm);
