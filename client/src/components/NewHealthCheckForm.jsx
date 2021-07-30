//NPM COMPONENTS
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Col from 'react-bootstrap/Col';
import _ from 'lodash';
import './NewHealthCheckForm.scss';
import Pill from './IngredientPill';
import InputAutoComplete from './InputAutoComplete';

export default function (props) {
    let { formData, setFormData, symptomList, setSymptomList } = props;

    function handleInputChange(e) {
        let { value, name } = e.target;
        setFormData((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }

    function handleMoodSelect(mood) {
        setFormData((prevValue) => {
            return { ...prevValue, mood };
        });
    }

    async function addSymptom(symptom, newItem) {
        symptom = _.startCase(_.lowerCase(symptom));
        setSymptomList((prevValue) => {
            if (prevValue.includes(symptom)) return prevValue;
            return [...prevValue, symptom];
        });
    }

    function handleDelete(index) {
        setSymptomList((prevValue) => {
            let output = [...prevValue];
            output.splice(index, 1);
            return output;
        });
    }

    return (
        <div className="new-health-check-form-container">

            <Form.Row>
                <Col xs={6}>
                    <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col xs={6}>
                    <Form.Control
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                    />
                </Col>
            </Form.Row>
            <Form.Row>
                {/* <Col className="mood-container" xs="auto"><div>Mood</div></Col> */}
                <Col xs={12} >
                    <ButtonGroup style={{display: 'flex'}}>
                        <Button
                            onClick={()=>handleMoodSelect(1)}
                            className="mood-button"
                            variant={formData.mood === 1 ? 'secondary' : 'light'}>
                            Grumpy
                        </Button>
                        <Button
                            onClick={()=>handleMoodSelect(2)}
                            className="mood-button"
                            variant={formData.mood === 2 ? 'secondary' : 'light'}>
                            Neutral
                        </Button>
                        <Button
                            onClick={()=>handleMoodSelect(3)}
                            className="mood-button"
                            variant={formData.mood === 3 ? 'secondary' : 'light'}>
                            Upbeat
                        </Button>
                    </ButtonGroup>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <InputAutoComplete
                        submit={addSymptom}
                        allowNewItems
                        clearOnSubmit
                        placeholder="Add Symptoms One at a Time"
                        apiEndpoint="symptoms"
                    />
                </Col>
            </Form.Row>
            <div className="symptom-list">
                {symptomList.map((symptom, index) => {
                    return (
                        <Pill
                            handleDelete={handleDelete}
                            index={index}
                            key={index}
                            primaryText={symptom}
                        />
                    );
                })}
            </div>
        </div>
    );
    return <div></div>;
}
