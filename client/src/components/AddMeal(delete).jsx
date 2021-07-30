import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewMealForm from './NewMealForm';
import * as API from './common/utils/api.js'
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs().format();
dayjs.extend(customParseFormat);

export default function AddMeal(props) {

    const defaultFormData = {
        ingredient: [''],
        mealType: [''],
        time: dayjs().format('HH:mm'),
        date: dayjs().format('YYYY-MM-DD'),
    };

    let [showModal, setShowModal] = useState(false);
    let [ingredientList, setIngredientList] = useState([]);
    let [formData, setFormData] = useState(defaultFormData);
    let [processing, setProcessing] = useState(false)
    function resetForm() {
        setFormData(defaultFormData);
        setIngredientList([]);
    }
    function handleClose() {
        setShowModal(false);
        resetForm();
    }
    async function handleSubmit() {
        let { date, time } = formData;
        let timestamp = dayjs(`${date} ${time}`, 'YYYY-MM-DD HH:mm').unix();

        let newMeal = {
            ingredients: ingredientList,
            type: formData.mealType,
            time: timestamp
        };
        try {
            setProcessing(true)
            await API.post('activity/meals', newMeal)
            setShowModal(false);
            setProcessing(false)
            resetForm();
        } catch (error) {}
    }
    function handleShow() {
        setShowModal(true);
    }

    return (
        <>
            <Button onClick={handleShow} className="new-meal" variant="success">
                <i className="fas fa-plus"></i> Add Meal
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Meal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <NewMealForm
                        formData={formData}
                        ingredientList={ingredientList}
                        setIngredientList={setIngredientList}
                        setFormData={setFormData}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button disabled={processing} variant="success" onClick={handleSubmit}>
                        {processing ? 'Posting' : 'Post Meal'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
