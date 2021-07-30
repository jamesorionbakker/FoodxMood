//NPM COMPONENTS
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

import _ from 'lodash';
import './NewMealForm.scss';
import Col from 'react-bootstrap/Col';
import Pill from './IngredientPill';
import InputAutoComplete from './InputAutoComplete';

export default function NewMealForm(props) {
    let { formData, setFormData, ingredientList, setIngredientList } = props;

    function handleInputChange(e) {
        let { value, name } = e.target;
        setFormData((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }

    async function addIngredient(ingredient) {
        ingredient = _.startCase(_.lowerCase(ingredient));
        setIngredientList((prevValue) => {
            if (prevValue.includes(ingredient)) return prevValue;
            return [...prevValue, ingredient];
        });
    }

    function handleDelete(index) {
        setIngredientList((prevValue) => {
            let output = [...prevValue];
            output.splice(index, 1);
            return output;
        });
    }

    return (
        <div className="new-meal-form-container">
            <Form.Row>
                <Col xs={12}>
                    <InputAutoComplete
                        submit={(value) => {
                            setFormData((prevValue) => {
                                return { ...prevValue, mealType: value };
                            });
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
                    />
                </Col>
            </Form.Row>
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
                {ingredientList.map((ingredient, index) => {
                    return (
                        <Pill
                            handleDelete={handleDelete}
                            index={index}
                            key={index}
                            primaryText={ingredient}
                        />
                    );
                })}
            </div>
        </div>
    );
}
