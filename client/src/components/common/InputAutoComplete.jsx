import React, { useState } from 'react';
import _ from 'lodash';
import { AsyncTypeahead, Hint, Menu } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import * as API from './utils/api.js';
import { Form } from 'react-bootstrap';

export default function InputAutoComplete(props) {
    let {
        submit,
        placeholder,
        apiEndpoint,
        allowNewItems,
        suggestions,
        clearOnSubmit,
        selectOnBlur,
    } = props;

    let [isLoading, setIsLoading] = useState(false);
    let [options, setOptions] = useState([]);
    let [selected, setSelected] = useState([]);
    let [currentSelection, setCurrentSelection] = useState();

    let inputText;

    async function handleSearch(query) {
        if (suggestions) {
            //if suggestions prop is supplied use supplied array
            setOptions(suggestions);
        } else {
            //if no suggestions prop is supplied, query api for suggestions
            setIsLoading(true);
            query = _.startCase(_.lowerCase(query));
            let url = `suggestions/${apiEndpoint}/${query}`;
            setOptions(await API.get(url));
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
        if (clearOnSubmit) setSelected(['']);
    }

    async function postValue(value) {
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
            selected={selected}
            placeholder={placeholder}
            onChange={(newSelection) => {   
                setSelected(newSelection);
                submitHandler(newSelection);
            }}
            onMenuToggle={(opening) => {
                if (selectOnBlur && !opening) {
                    //if select on blur prop is true, and menu is being closed
                    if (inputText && currentSelection) {
                        setSelected([currentSelection]);
                        submitHandler([currentSelection]);
                        setCurrentSelection('');
                    } else {
                        setSelected(['']);
                        submitHandler(['']);
                    }
                }
            }}
            highlightOnlyResult={selectOnBlur}
            onSearch={handleSearch}>
            {selectOnBlur &&
                ((state) => {
                    inputText = state.text;
                    //next line is a workaround, active index is not set if there is only one result
                    if (state.results.length === 1) return setCurrentSelection(state.results[0]); 
                    return setCurrentSelection(state.results[state.activeIndex]);
                })}
        </AsyncTypeahead>
    );
}
