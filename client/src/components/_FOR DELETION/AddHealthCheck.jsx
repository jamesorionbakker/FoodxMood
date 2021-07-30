import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewHealthCheckForm from './NewHealthCheckForm.jsx';
import * as API from './common/utils/api.js'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs().format();
dayjs.extend(customParseFormat);

export default function AddHealthCheck(props) {

    const defaultFormData = {
        symptom: [''],
        time: dayjs().format('HH:mm'),
        date: dayjs().format('YYYY-MM-DD'),
        mood: null
    };

    let [showModal, setShowModal] = useState(false);
    let [symptomList, setSymptomList] = useState([]);
    let [formData, setFormData] = useState(defaultFormData);
    let [processing, setProcessing] =  useState(false)
    function resetForm() {
        setFormData(defaultFormData);
        setSymptomList([]);
    }
    function handleClose() {
        setShowModal(false);
        resetForm();
    }
    async function handleSubmit() {
        let { date, time } = formData;
        let timestamp = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm').unix();

        let newHealthCheck = {
            symptoms: symptomList,
            time: timestamp,
            mood: formData.mood
        };
        try {
            setProcessing(true)
            await API.post('activity/health-checks', newHealthCheck)
            setShowModal(false);
            setProcessing(false)
            resetForm();
        } catch (error) {
            console.log(error)
        }
    }
    function handleShow() {
        setShowModal(true);
    }

    return (
        <>
            <Button onClick={handleShow} className="new-health-check" variant="success">
                <i className="fas fa-plus"></i> Add Wellness Check
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Wellness Check</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewHealthCheckForm
                        formData={formData}
                        symptomList={symptomList}
                        setSymptomList={setSymptomList}
                        setFormData={setFormData}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="success" disabled={processing} onClick={handleSubmit}>
                        {processing ? 'Posting' : 'Post Wellness Check'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
