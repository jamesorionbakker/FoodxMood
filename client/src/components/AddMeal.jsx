import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import NewMealForm from './NewMealForm/NewMealForm';


export default function AddMeal(props) {
    let [showModal, setShowModal] = useState(false);

    function handleClose() {
        setShowModal(false);
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
                    <NewMealForm userState={props.userState} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
