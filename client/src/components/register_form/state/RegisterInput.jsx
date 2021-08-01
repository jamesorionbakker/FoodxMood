import React from 'react'
import Form from 'react-bootstrap/Form';
import _ from 'lodash';


export default function RegisterInput(props){
    let {name, state, validationCallback, placeholder, capitalize, type } = props
    let handleBlur = props.onBlur
    let handleChange = props.onChange
    return (
        <Form.Group>
            <Form.Control
                name={name}
                value={state.value}
                isInvalid={state.touched && !state.valid}
                isValid={state.touched && state.valid}
                onBlur={(e) => {
                    let value = e.target.value
                    if (value) handleBlur(e, validationCallback);
                }}
                onChange={(e) => {
                    let {name, value} = e.target
                    if(capitalize) value = _.startCase(_.lowerCase(value))
                    handleChange({name, value});
                }}
                type={type}
                placeholder={placeholder}
            />
            <Form.Control.Feedback type="invalid">{state.error}</Form.Control.Feedback>
            <Form.Control.Feedback type="valid">{state.error}</Form.Control.Feedback>
        </Form.Group>
    );
}