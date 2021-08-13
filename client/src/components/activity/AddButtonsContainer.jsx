import React from 'react';
import './AddButtonsContainer.scss';
import { useDispatch } from 'react-redux';
import { newMeal } from 'components/meal_form/state/MealFormActions';
import Button from 'react-bootstrap/Button';
import { newHealthCheck } from 'components/health_check_form/state/healthCheckFormActions';

export default function AddButtonsContainer(props) {
    const dispatch = useDispatch();
    return (
        <div className="add-buttons-container">
            <Button
                onClick={() => {
                    dispatch(newMeal());
                }}
                className="new-meal"
                variant="default">
                <i className="fas fa-plus"></i> Add Meal
            </Button>
            <Button
                onClick={() => {
                    dispatch(newHealthCheck());
                }}
                className="new-meal"
                variant="default">
                <i className="fas fa-plus"></i> Add Wellness Check
            </Button>
        </div>
    );
}
