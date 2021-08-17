import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { closeHealthCheckForm, formChange, deleteSymptom } from './state/healthCheckFormActions';
import InputAutoComplete from 'components/common/InputAutoComplete';
import Pill from 'components/IngredientPill';
import * as API from 'components/common/utils/api';
import { stringToUnixTime } from 'components/common/utils/DateHandler';
import './HealthCheckForm.scss';
import { setActivity } from 'components/activity/state/ActivityActions';

export default function HealthCheckForm() {
    let [processing, setProcessing] = useState(false);
    let state = useSelector((state) => state.healthCheckForm);
    let dispatch = useDispatch();

    function handleClose() {
        dispatch(closeHealthCheckForm());
    }
    function handleMoodSelect(val) {
        dispatch(
            formChange({
                mood: val,
            })
        );
    }
    function addSymptom(newSymptom) {
        newSymptom = _.startCase(_.lowerCase(newSymptom));
        console.log(state.symptoms);
        if (state.symptoms.map((symptom) => symptom.description).includes(newSymptom)) return;
        dispatch(
            formChange({
                symptoms: [...state.symptoms, { description: newSymptom }],
            })
        );
    }
    async function handleSubmit() {
        try {
            setProcessing(true);
            let unixTime = stringToUnixTime(state.dateString, state.timeString);
            let newHealthCheck = {
                symptoms: state.symptoms.map((symptom) => symptom.description),
                mood: state.mood,
                time: unixTime,
            };
            if (state.new) await API.post('activity/health-checks', newHealthCheck);
            if (state.edit) await API.put('activity/health-checks/' + state._id, newHealthCheck);
            setProcessing(false);
            handleClose();
            dispatch(setActivity());
        } catch (error) {
            console.log(error);
            setProcessing(false);
            handleClose();
        }
    }

    return (
        <Modal show={state.show} onHide={handleClose}>
            <Modal.Header closeButton>
                {state.edit && <Modal.Title>Edit Wellness Check</Modal.Title>}
                {state.new && <Modal.Title>Post New Wellness Check</Modal.Title>}
            </Modal.Header>
            <Modal.Body>
                <div className="health-check-form-container">
                    <Row>
                        <Col xs={6}>
                            <Form.Control
                                type="date"
                                name="date"
                                value={state.dateString}
                                onChange={(e) => {
                                    dispatch(
                                        formChange({
                                            dateString: e.target.value,
                                        })
                                    );
                                }}
                            />
                        </Col>
                        <Col xs={6}>
                            <Form.Control
                                type="time"
                                name="time"
                                value={state.timeString}
                                onChange={(e) => {
                                    dispatch(
                                        formChange({
                                            timeString: e.target.value,
                                        })
                                    );
                                }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            <ButtonGroup style={{ display: 'flex' }}>
                                <Button
                                    onClick={() => handleMoodSelect(1)}
                                    className="mood-button"
                                    variant={state.mood === 1 ? 'secondary' : 'light'}>
                                    Grumpy
                                </Button>
                                <Button
                                    onClick={() => handleMoodSelect(2)}
                                    className="mood-button"
                                    variant={state.mood === 2 ? 'secondary' : 'light'}>
                                    Neutral
                                </Button>
                                <Button
                                    onClick={() => handleMoodSelect(3)}
                                    className="mood-button"
                                    variant={state.mood === 3 ? 'secondary' : 'light'}>
                                    Upbeat
                                </Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputAutoComplete
                                submit={addSymptom}
                                allowNew
                                clearOnSubmit
                                placeholder="Add Symptoms One at a Time"
                                apiEndpoint="symptoms"
                            />
                        </Col>
                    </Row>
                    <div className="symptom-list">
                        {state.symptoms.map((symptom, index) => {
                            return (
                                <Pill
                                    onClick={() => {
                                        dispatch(deleteSymptom(symptom));
                                    }}
                                    index={index}
                                    key={index}
                                    primaryText={symptom.description}
                                />
                            );
                        })}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={handleClose}>
                    Cancel
                </Button>
                {state.new && (
                    <Button
                        className="button-light-green"
                        disabled={processing}
                        variant="default"
                        onClick={handleSubmit}>
                        {processing ? 'Posting' : 'Post Health Check'}
                    </Button>
                )}
                {state.edit && (
                    <Button
                        className="button-light-green"
                        disabled={processing}
                        variant="default"
                        onClick={handleSubmit}>
                        {processing ? 'Saving' : 'Save Changes'}
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}
