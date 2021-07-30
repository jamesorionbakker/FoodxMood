import React, { useState } from 'react';
import _ from 'lodash';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import * as API from './utils/api.js';

export default function InputAutoComplete(props) {
    let {
        defaultInputValue,
        submit,
        placeholder,
        apiEndpoint,
        allowNewItems,
        suggestions,
        clearOnSubmit
    } = props;
    
    let [isLoading, setIsLoading] = useState(false);
    let [options, setOptions] = useState([]);
    let [value, setValue] = useState([]);

    async function handleSearch(query) {
        if (suggestions) { //if suggestions prop is supplied use supplied array
            setOptions(suggestions);
        } else { //if no suggestions prop is supplied, query api for suggestions
            setIsLoading(true);
            query = _.startCase(_.lowerCase(query));
            let url = `suggestions/${apiEndpoint}/${query}`;
            setOptions(await API.get(url))
            setIsLoading(false);
        }
    }

    function submitHandler(value) {
        if (value.length <= 0) return;
        let outputValue = value[0];
        let newItem = false;
        if (typeof outputValue === 'object') {
            outputValue = outputValue.label;
            newItem = true;
        }
        outputValue = _.startCase(_.lowerCase(outputValue));
        if (allowNewItems && newItem) {
            postValue(outputValue);
        }
        submit(outputValue);
        if(clearOnSubmit) setValue(['']);
    }

    async function postValue(value) {
        // let response = await fetch(`/${endpoint}`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         Authorization: `Bearer ${accessToken.value}`,
        //     },
        //     body: JSON.stringify({ ingredient: value }),
        // });
        await API.post(apiEndpoint, { value });
    }

    return (
        <AsyncTypeahead
            selectHintOnEnter={true}
            id="autocomplete-input"
            minLength={1}
            allowNew={allowNewItems}
            delay={100}
            newSelectionPrefix="Add a new item: "
            isLoading={isLoading}
            options={options}
            selected={value}
            placeholder={placeholder}
            onChange={(value) => {
                setValue(value);
                submitHandler(value);
            }}
            onSearch={handleSearch}
            defaultInputValue={defaultInputValue ? defaultInputValue : ''}
        />
    );
}
