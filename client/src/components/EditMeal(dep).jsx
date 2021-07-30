import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import InputAutoComplete from './InputAutoComplete';
import { useDispatch, useSelector } from 'react-redux';
import { setEditMeal } from './common/state/Actions';
import { valueToNode } from '@babel/types';
import _ from 'lodash'
import Pill from './IngredientPill';


export default (props) => {
    let [processing, setProcessing] = useState(false);
    let state = useSelector(state => state.editMeal)
    const dispatch = useDispatch();

    async function handleSubmit() {}
    async function handleClose() {
        dispatch(setEditMeal({ show: false }));
    }
    function handleInputChange(e){
        let { name, value } = e.target
        dispatch(setEditMeal({[name]: value}))
    }
    function addIngredient(ingredient) {
        ingredient = _.startCase(_.lowerCase(ingredient));
        if (state.ingredients.includes(ingredient)) return
        dispatch(setEditMeal({newIngredient: ingredient}))
    }

    return (
        <Modal
            show={useSelector((state) => state.editMeal.show)}
            onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Meal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="new-meal-form-container">
                    <Form.Row>
                        <Col xs={12}>
                            <InputAutoComplete
                                submit={(value) => {
                                    dispatch(setEditMeal({ mealType: value }));
                                }}
                                suggestions={[
                                    'Breakfast',
                                    'Lunch',
                                    'Dinner',
                                    'Snack',
                                    'Dessert',
                                    'Drink',
                                ]}
                                placeholder="Meal Type (ie: Breakfast, Lunch, Dinner)"
                                startingValue="Dinner"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col xs={6}>
                            <Form.Control
                                type="date"
                                name="date"
                                value={state.date}
                                onChange={handleInputChange}
                            />
                        </Col>
                        <Col xs={6}>
                            <Form.Control
                                type="time"
                                name="time"
                                value={state.time}
                                onChange={handleInputChange}
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <InputAutoComplete
                                submit={addIngredient}
                                apiEndpoint="ingredients"
                                allowNewItems
                                clearOnSubmit
                                placeholder="Add Ingredients One at a Time"
                            />
                        </Col>
                    </Form.Row>
                    <div className="ingredient-list">
                        {state.ingredients.map((ingredient, index) => {
                            return (
                                <Pill
                                    //handleDelete={handleDelete}
                                    index={index}
                                    key={index}
                                    primaryText={ingredient}
                                />
                            );
                        })}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button
                    disabled={processing}
                    variant="success"
                    onClick={handleSubmit}>
                    {processing ? 'Posting' : 'Post Meal'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
