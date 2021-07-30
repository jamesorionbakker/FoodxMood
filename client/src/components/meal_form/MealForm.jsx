import React from 'react';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import InputAutoComplete from 'components/InputAutoComplete';
import {
    closeMealForm,
    formChange,
} from './state/MealFormActions';
import Pill from 'components/IngredientPill';
import * as API from 'components/common/utils/api';
import { stringToUnixTime } from 'components/common/utils/DateHandler';
import './MealForm.scss';
import { setActivity } from 'components/activity/state/ActivityActions';

export default function MealForm(props) {
    let [processing, setProcessing] = useState(false);
    let state = useSelector((state) => state.mealForm);
    const dispatch = useDispatch();

    async function handleSubmit() {
        try {
            setProcessing(true);
            let unixTime = stringToUnixTime(state.dateString, state.timeString);
            let newMeal = {
                ingredients: state.ingredients.map(
                    (ingredient) => ingredient.name
                ),
                type: state.mealType,
                time: unixTime,
            };
            if (state.new) await API.post('activity/meals', newMeal);
            if (state.edit)
                await API.put('activity/meals/' + state._id, newMeal);
            setProcessing(false);
            handleClose();
            dispatch(setActivity());
        } catch (error) {
            console.log(error);
            setProcessing(false);
            handleClose();
        }
    }
    async function handleClose() {
        dispatch(closeMealForm());
    }

    function addIngredient(newIngredient) {
        newIngredient = _.startCase(_.lowerCase(newIngredient));
        if (state.ingredients.map(ingredient => ingredient.name).includes(newIngredient)) return;
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
                    <Form.Row>
                        <Col xs={12}>
                            <InputAutoComplete
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
                                //placeholder="Meal Type (ie: Breakfast, Lunch, Dinner)"
                            />
                        </Col>
                    </Form.Row>
                    <Form.Row>
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
                            console.log(ingredient.name);
                            return (
                                <Pill
                                    //handleDelete={handleDelete}
                                    index={index}
                                    key={index}
                                    primaryText={ingredient.name}
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
                {state.new && (
                    <Button
                        disabled={processing}
                        variant="success"
                        onClick={handleSubmit}>
                        {processing ? 'Posting' : 'Post Meal'}
                    </Button>
                )}
                {state.edit && (
                    <Button
                        disabled={processing}
                        variant="success"
                        onClick={handleSubmit}>
                        {processing ? 'Saving' : 'Save Changes'}
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}
