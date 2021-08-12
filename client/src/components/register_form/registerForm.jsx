import { useState } from 'react';
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { hideRegisterForm, setRegisterForm, validateRegisterForm } from './state/registerFormActions';
import Button from 'react-bootstrap/Button';
import './RegisterForm.scss';
import * as validate from 'components/common/utils/formValidation';
import _ from 'lodash';
import RegisterInput from './state/RegisterInput';

export default function RegisterForm() {
    let [processing, setProcessing] = useState(false);
    const dispatch = useDispatch();
    let state = useSelector((state) => state.registerForm);

    function handleSubmit(e) {
        e.preventDefault()
        if(!state.password.valid) return
        if(!state.passwordVerify.valid) return
        if(!state.username.valid) return
        if(!state.firstName.valid) return
        if(!state.lastName.valid) return
        if(!state.username.valid) return
        console.log('good to go')
    }

    async function handleChange({ name, value }) {
        dispatch(setRegisterForm({ [name]: { value } }));
    }

    async function handleBlur(e, validationCallback) {
        let { name, value } = e.target;
        let { valid, error } = await validationCallback(value);
        dispatch(validateRegisterForm({ [name]: { value, valid, touched: true, error } }));
    }

    // function Input({ name, type = 'input', placeholder, validationCallback, capitalize = false }) {
    //     return (
    //         <Form.Group>
    //             <Form.Control
    //                 name={name}
    //                 value={state[name].value}
    //                 isInvalid={state[name].touched && !state[name].valid}
    //                 isValid={state[name].touched && state[name].valid}
    //                 onBlur={(e) => {
    //                     let value = e.target.value;
    //                     if (value) handleBlur(e, validationCallback);
    //                 }}
    //                 onChange={(e) => {
    //                     let { name, value } = e.target;
    //                     if (capitalize) value = _.startCase(_.lowerCase(value));
    //                     handleChange({ name, value });
    //                 }}
    //                 type={type}
    //                 placeholder={placeholder}
    //             />
    //             <Form.Control.Feedback type="invalid">{state[name].error}</Form.Control.Feedback>
    //             <Form.Control.Feedback type="valid">{state[name].error}</Form.Control.Feedback>
    //         </Form.Group>
    //     );
    // }

    return (
        <Modal show={state.show} onHide={() => dispatch(hideRegisterForm())}>
            <Form onSubmit={handleSubmit} noValidate>
                <Modal.Header>
                    <Modal.Title>Sign Up!</Modal.Title>
                </Modal.Header>
                <Modal.Body className="register-form-container">
                    <h6>Personal info:</h6>
                    <Row>
                        <Col xs={6}>
                            <RegisterInput
                                state={state.firstName}
                                name="firstName"
                                placeholder="First Name"
                                validationCallback={validate.name}
                                
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Col>
                        <Col xs={6}>
                            <RegisterInput
                                state={state.lastName}
                                name="lastName"
                                placeholder="Last Name"
                                validationCallback={validate.name}
                                capitalize
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <RegisterInput
                                state={state.email}
                                name="email"
                                placeholder="Email"
                                validationCallback={validate.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Col>
                    </Row>
                    <hr />
                    <h6>Account Info:</h6>
                    <Row>
                        <Col xs={12}>
                            <RegisterInput
                                state={state.username}
                                name="username"
                                placeholder="Username"
                                validationCallback={async (value) => {
                                    if (!/^\w{1,}$/i.test(value))
                                        return { valid: false, error: 'Invalid Username' };
                                    let response = await fetch('validation/username/' + value);
                                    let valid = await response.json();
                                    let error = valid
                                        ? 'Username is available'
                                        : 'Username is not available';
                                    return { valid, error };
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <RegisterInput
                                state={state.password}
                                name="password"
                                placeholder="Password"
                                validationCallback={validate.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <RegisterInput
                                state={state.passwordVerify}
                                name="passwordVerify"
                                placeholder="Verify Password"
                                validationCallback={(value) => {
                                    let valid = state.password.value === value;
                                    let error = valid ? '' : 'Passwords do not match';
                                    return { valid, error };
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(hideRegisterForm())}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} type="submit" disabled={processing} variant="success">
                        {processing ? 'Creating Account' : 'Create Account'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}
