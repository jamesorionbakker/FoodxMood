//NPM COMPONENTS
import React, { useState } from 'react';
import _ from 'lodash';
import dayjs from 'dayjs';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css'

//CUSTOM COMPONENTS
import './NewMealForm.scss';

dayjs().format();

export default function MealInput(props) {
    let {mealType, setMealType} = props
    let [isLoading, setIsLoading] = useState(false)
    let [options, setOptions] = useState([])

    async function handleSearch(){
        setIsLoading(true)
        let response = await fetch('/mealtypes')
        setOptions(await response.json())
        setIsLoading(false)
    }

    return (
        <AsyncTypeahead
            id='meal-type-input'
            delay={200}
            newSelectionPrefix="Add a new item: "
            isLoading={isLoading}
            options={options}
            placeholder="Meal Type"
            name="mealInput"
            selected={mealType}
            onChange={setMealType}
            onSearch={handleSearch}
            onKeyPress={null}
        />
    );
}
