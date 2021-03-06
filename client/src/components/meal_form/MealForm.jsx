import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import InputAutoComplete from 'components/common/InputAutoComplete';
import { closeMealForm, deleteIngredient, formChange } from './state/MealFormActions';
import * as API from 'components/common/utils/api';
import { stringToUnixTime } from 'components/common/utils/DateHandler';
import './MealForm.scss';
import { insertEntryLocal, updateEntryLocal } from 'components/activity/state/ActivityActions';
import Pill from 'components/Pill';

export default function MealForm(props) {
    let [processing, setProcessing] = useState(false);
    let state = useSelector((state) => state.mealForm);
    const dispatch = useDispatch();

    async function handleSubmit() {
        try {
            setProcessing(true);
            let unixTime = stringToUnixTime(state.dateString, state.timeString);
            let newMeal = {
                ingredients: state.ingredients.map((ingredient) => ingredient.name),
                type: state.mealType,
                time: unixTime,
            };
            if (state.new) {
                let newEntry = await API.post('activity/meals', newMeal);
                dispatch(insertEntryLocal(newEntry));
            }
            if (state.edit) {
                let updatedEntry = await API.put('activity/meals/' + state._id, newMeal);
                dispatch(updateEntryLocal(updatedEntry));

            }
            setProcessing(false);
            handleClose();

            //dispatch(loadInitialActivity());
        } catch (error) {
            console.log(error);
            setProcessing(false);
            //handleClose();
        }
    }
    async function handleClose() {
        dispatch(closeMealForm());
    }

    function addIngredient(newIngredient) {
        newIngredient = _.startCase(_.lowerCase(newIngredient));
        if (state.ingredients.map((ingredient) => ingredient.name).includes(newIngredient)) return;
        dispatch(
            formChange({
                ingredients: [...state.ingredients, { name: newIngredient }],
            })
        );
    }

    return (
        <Modal show={state.show} onHide={handleClose}>
            <Modal.Header closeButton>
                {state.edit && <Modal.Title>Edit Meal</Modal.Title>}
                {state.new && <Modal.Title>Post New Meal</Modal.Title>}
            </Modal.Header>
            <Modal.Body>
                <div className="meal-form-container">
                    <Row>
                        <Col xs={12}>
                            <InputAutoComplete
                                selectOnBlur
                                submit={(value) => {
                                    dispatch(formChange({ mealType: value }));
                                }}
                                suggestions={[
                                    'Breakfast',
                                    'Lunch',
                                    'Dinner',
                                    'Snack',
                                    'Dessert',
                                    'Drink',
                                ]}
                                defaultInputValue={state.mealType}
                                placeholder="Meal Type (ie: Breakfast, Lunch, Dinner)"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Form.Control
                                type="date"
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
                        <Col>
                            <InputAutoComplete
                                allowNewItems
                                submit={addIngredient}
                                apiEndpoint="ingredients"
                                clearOnSubmit
                                placeholder="Add Ingredients One at a Time"
                            />
                        </Col>
                    </Row>
                    <div className="ingredient-list">
                        {state.ingredients.map((ingredient, index) => {
                            return (
                                <Pill
                                    key={index}
                                    deleteable
                                    margin="10px"
                                    onDelete={() => {
                                        dispatch(deleteIngredient(ingredient));
                                    }}
                                    text={ingredient.name}
                                    color="brown"
                                    size="md"
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
                        {processing ? 'Posting' : 'Post Meal'}
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
