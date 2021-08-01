import React, { useState } from 'react';
import './LoginForm.scss';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AccessToken } from '../common/utils/accessToken.js';
import UserState from 'components/common/utils/userState';
import { useDispatch, useSelector } from 'react-redux';
import { setUserState } from 'components/common/state/UserStateActions';
import { setLoginForm, logIn } from './state/loginFormActions';
import { showRegisterForm } from 'components/register_form/state/registerFormActions';
import RegisterForm from 'components/register_form/registerForm';

export default function Login() {
    let state = useSelector((state) => state.loginForm);

    const dispatch = useDispatch();

    async function registerUser(credentials) {
        let response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ credentials }),
        });
        let token = new AccessToken(await response.json());
        dispatch(setUserState(new UserState(token))); //REDUX
    }

    return (
        <div className="login-container">
            {state.show && (
                <Form className="form">
                    <div className="login">
                        <Row className="form-row">
                            <Col md="auto">
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
                            <Col md="auto">
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
                            <Col xs={8} md="auto">
                                <Button
                                    onClick={() => {
                                        console.log('signing in')
                                        dispatch(logIn());
                                    }}
                                    className="login-button"
                                    variant="light">
                                    Sign In
                                </Button>
                            </Col>
                            <Col xs={4} md="auto">
                                <Button
                                    onClick={() => dispatch(showRegisterForm())}
                                    className="signup-button"
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
