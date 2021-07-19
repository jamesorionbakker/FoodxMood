import React from 'react';
import AddHealthCheck from './AddHealthCheck';
import AddMeal from './AddMeal.jsx'
import './AddButtonsContainer.scss'

export default function AddButtonsContainer(props) {
    return (
        <div className="add-buttons-container">
            <AddHealthCheck userState={props.userState}/>
            <AddMeal userState={props.userState} />
        </div>
    );
}
