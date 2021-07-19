//NPM COMPONENTS
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

//CUSTOM COMPONENTS
import './NewMealForm.scss';

export default function IngredientInput(props) {
    let { ingredient, setIngredient, addIngredient, setQueuedIngredient } =
        props;
    let [isLoading, setIsLoading] = useState(false);
    let [options, setOptions] = useState([]);

    async function handleSearch(query) {
        console.log(query)
        setIsLoading(true);
        let response = await fetch('/ingredients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Authorization: `Bearer ${accessToken.value}`,
            },
            body: JSON.stringify({query}),
        });
        setOptions(await response.json());
        setIsLoading(false);
    }

    function addIngredientHandler(ingredient) {
        if (ingredient.length <= 0) return;
        let outputIngredient = ingredient[0]
        let newItem = false
        if (typeof ingredient[0] === 'object') {
            outputIngredient = outputIngredient.label
            newItem = true;
        }
        addIngredient(outputIngredient, newItem);
        setIngredient(['']);
    }
    return (
        <AsyncTypeahead
            id="new-ingredient-input"
            minLength={1}
            allowNew
            delay={400}
            newSelectionPrefix="Add a new item: "
            isLoading={isLoading}
            options={options}
            selected={ingredient}
            placeholder="Add Ingredients (One at a Time)"
            onChange={(ingredient) => {
                setIngredient(ingredient);
                addIngredientHandler(ingredient);
            }}
            onSearch={handleSearch}
        />
    );
}
