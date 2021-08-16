import React from 'react';
import './LoginForm.scss';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginForm, logIn } from './state/loginFormActions';
import { showRegisterForm } from 'components/register_form/state/registerFormActions';
import RegisterForm from 'components/register_form/registerForm';

export default function LoginForm() {
    let state = useSelector((state) => state.loginForm);
    let { attemptingLogin } = useSelector((state) => state.UserState);

    const dispatch = useDispatch();

    return (
        <div className="login-container">
            {!attemptingLogin && (
                <Form
                    className="form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log('signing in');
                        dispatch(logIn());
                    }}>
                    <div className="login">
                        <Row className="form-row">
                            <Col className="form-col" md="auto">
                                <Form.Control
                                    isInvalid={state.invalidUsername}
                                    name="username"
                                    className="username"
                                    placeholder="User Name"
                                    value={state.username}
                                    onChange={(e) => {
                                        dispatch(setLoginForm({ username: e.target.value }));
                                    }}
                                />
                            </Col>
                            <Col className="filler" xs={12}></Col>
                            <Col className="form-col" md="auto">
                                <Form.Control
                                    isInvalid={state.invalidPassword}
                                    name="password"
                                    className="password"
                                    type="password"
                                    value={state.password}
                                    onChange={(e) => {
                                        dispatch(setLoginForm({ password: e.target.value }));
                                    }}
                                    placeholder="Password"
                                />
                            </Col>
                            <Col className="filler" xs={12}></Col>
                            <Col className="form-col" xs={8} md="auto">
                                <Button type="submit" className="login-button" variant="light">
                                    Sign In
                                </Button>
                            </Col>
                            <Col className="form-col" xs={4} md="auto">
                                <Button
                                    onClick={() => dispatch(showRegisterForm())}
                                    className="button-dark-green"
                                    variant="success">
                                    Sign Up
                                </Button>
                                <RegisterForm />
                            </Col>
                        </Row>
                    </div>
                </Form>
            )}
        </div>
    );
}
