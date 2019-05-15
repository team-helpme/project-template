import React from 'react';
import {
    Form,
    Icon,
    Input,
    Button,
    Typography
} from 'antd';
import 'antd/dist/antd.css';
import './Authentication.css';
import Router from 'next/router';
import LoginImage from '../../../static/login.svg';
import {
    loginUsernameInputError,
    loginPasswordInputError
} from '../constants';

const { Title, Paragraph } = Typography;

/**
 *  function that is used to display the Login Page
 * @function
 * @return {Object} the login page
 */

class NormalLoginForm extends React.Component {
    state = {
        iconLoading: false, // loading icon when code is accessing network
        loading: false,
    }

    enterLoading = () => {
        this.setState({ loading: true });
    }

    // handles the submitting of the login form
    handleSubmit = e => {
        e.preventDefault();
        // validate error and simulate api response with settimeout
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                setTimeout(() => {
                    Router.push('/timeline');
                }, 1000);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <section className="Login-Section">
                <section className="login-image-section">
                    <LoginImage className="login-image" />
                </section>

                <section className="Login-Form-section">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Title level={4}>Welcome</Title>
                        <Paragraph>Login to continue</Paragraph>

                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    rules: [{ required: true, message: loginUsernameInputError }],
                                })(
                                    <Input prefix={<Icon type="user" className="form_icon" />} placeholder="Username" />
                                )
                            }
                        </Form.Item>

                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: loginPasswordInputError }],
                            })(
                                <Input prefix={<Icon type="lock" className="form_icon" />} type="password" placeholder="Password" />
                            )}
                        </Form.Item>

                        <Form.Item>
                            <a className="login-form-forgot" href="/password_reset">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button" loading={this.state.loading} onClick={this.enterLoading}>
                                Log in
                            </Button>
                            Or
                            <a className="login-form-register" href="/signup"> register now!</a>
                        </Form.Item>
                    </Form>
                </section>
            </section>
        );
    }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default Login;
