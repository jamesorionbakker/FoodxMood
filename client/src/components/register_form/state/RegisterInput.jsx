import React from 'react';
import Form from 'react-bootstrap/Form';
import _ from 'lodash';

export default function RegisterInput(props) {
    let { name, state, validationCallback, placeholder, capitalize, type, validated, trimWhitespace} = props;
    let handleBlur = props.onBlur;
    let handleChange = props.onChange;
    return (
        <Form.Group>
            <Form.Control
                name={name}
                value={state.value}
                isInvalid={validated && state.touched && !state.valid}
                isValid={validated && state.touched && state.valid}
                onBlur={(e) => {
                    let value = e.target.value;
                    if (value) handleBlur(e, validationCallback);
                }}
                onChange={(e) => {
                    let { name, value } = e.target;
                    //if capitalize prop is true, and last character typed is a letter char
                    if (trimWhitespace) value = _.trim(value)
                    if (capitalize && /\w$/.test(value)) {
                        value = value.split(/\s/).reduce((acc, substring) => {
                            return acc + _.upperFirst(substring) + ' ';
                        }, '');
                        value = _.trim(value);
                    }
                    handleChange({ name, value });
                }}
                type={type}
                placeholder={placeholder}
            />
            <Form.Control.Feedback type="invalid">{state.error}</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">{state.error}</Form.Control.Feedback>
        </Form.Group>
    );
}
