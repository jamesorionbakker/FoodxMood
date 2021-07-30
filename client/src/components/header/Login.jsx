import React, { useState } from 'react';
import './Login.scss';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { AccessToken } from '../common/utils/accessToken.js';
import UserState from 'components/common/utils/userState';
import { useDispatch } from 'react-redux';
import { setUserState } from 'components/common/state/Actions';

export default function Login(props) {
    let [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });
    let [invalidUser, setInvalidUser] = useState(false);
    let [invalidPass, setInvalidPass] = useState(false);
    const dispatch = useDispatch();

    function handleFormChange(e) {
        let { name, value } = e.target;
        setCredentials((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }

    function handleRegister() {
        registerUser(credentials);
    }
    function handleLogin() {
        logIn(credentials);
    }
    async function logIn(credentials) {
        try {
            let response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({ credentials }),
            });
            if (response.status !== 200) {
                let errorMessage = await response.json();
                throw new Error(errorMessage);
            }
            let token = new AccessToken(await response.json());

            dispatch(setUserState(new UserState(token)));
            //props.setUserState(new UserState(accessToken));
        } catch (error) {
            console.log(error);
            if (error.message === 'invalid username') {
                setInvalidPass(false);
                setInvalidUser(true);
            }
            if (error.message === 'invalid password') {
                setInvalidUser(false);
                setInvalidPass(true);
            }
        }
    }

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
            <Form className="form">
                <div className="login">
                    <Form.Row className="form-row">
                        <Col md="auto">
                            <Form.Control
                                isInvalid={invalidUser}
                                name="username"
                                className="username"
                                placeholder="User Name"
                                value={credentials.username}
                                onChange={handleFormChange}
                            />
                        </Col>
                        <Col className="filler" xs={12}></Col>
                        <Col md="auto">
                            <Form.Control
                                isInvalid={invalidPass}
                                name="password"
                                className="password"
                                type="password"
                                value={credentials.password}
                                onChange={handleFormChange}
                                placeholder="Password"
                            />
                        </Col>
                        <Col className="filler" xs={12}></Col>
                        <Col xs={8} md="auto">
                            <Button
                                onClick={handleLogin}
                                className="login-button"
                                variant="light">
                                Sign In
                            </Button>
                        </Col>
                        <Col xs={4} md="auto">
                            <Button
                                onClick={handleRegister}
                                className="signup-button"
                                variant="success">
                                Sign Up
                            </Button>
                        </Col>
                    </Form.Row>
                </div>
            </Form>
        </div>
    );
}
