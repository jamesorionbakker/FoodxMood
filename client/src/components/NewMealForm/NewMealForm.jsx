//NPM COMPONENTS
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import _ from 'lodash';
import dayjs from 'dayjs';

//CUSTOM COMPONENTS
import './NewMealForm.scss';
import Col from 'react-bootstrap/Col';
import Pill from './IngredientPill';
import MealTypeInput from './MealTypeInput';
import IngredientInput from './IngredientInput';

dayjs().format();

export default function NewMealForm(props) {

    let {userState} = props
    let {accessToken} = userState

    let [formData, setFormData] = useState({
        ingredient: [''],
        mealType: [''],
        time: dayjs().format('HH:mm'),
        date: dayjs().format('YYYY-MM-DD'),
    });
    let [ingredientList, setIngredientList] = useState([]);
    //let queuedIngredient = ''


    function handleInputChange(e) {
        let { value, name } = e.target;
        if (value === ' ') return;
        setFormData((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }

    async function postIngredient(ingredient){
        console.log('posting ' + ingredient)
        let response = await fetch('/ingredient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken.value}`,
            },
            body: JSON.stringify({ingredient}),
        });

    }

    async function addIngredient(ingredient, newItem) {
        console.log(newItem)
        ingredient = _.startCase(_.lowerCase(ingredient));
        if(newItem){
            await postIngredient(ingredient)
        }
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
                    {/* <Typeahead
                            options={['breakfast', 'lunch', 'dinner']}
                            placeholder="Meal Type"
                            name="mealInput"
                            value={formData.mealInput}
                            onChange={handleInputChange}
                            onKeyPress={handleIngKey}
                        /> */}
                    <MealTypeInput
                        mealType={formData.mealType}
                        setMealType={(value) => {
                            setFormData((prevValue) => {
                                return { ...prevValue, mealType: value };
                            });
                        }}
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
                    {/* <Form.Control
                        placeholder="Add Ingredients (One at a Time)"
                        name="ingredientInput"
                        value={formData.ingredientInput}
                        onChange={handleInputChange}
                        onKeyPress={handleIngKey}
                    /> */}
                    <IngredientInput
                        addIngredient={addIngredient}
                        ingredient={formData.ingredient}
                        setIngredient={(value) => {
                            setFormData((prevValue) => {
                                return { ...prevValue, ingredient: value };
                            });
                        }}
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
