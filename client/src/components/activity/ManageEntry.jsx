import React from 'react';
import * as API from '../common/utils/api.js';
import { useDispatch } from 'react-redux';
import { editMeal } from 'components/meal_form/state/MealFormActions';
import { loadInitialActivity } from 'components/activity/state/ActivityActions';
import { editHealthCheck } from 'components/health_check_form/state/healthCheckFormActions.js';

export default function ManageEntry(props) {
    const dispatch = useDispatch();
    let { _id, type } = props.entry;
    let endpoint;
    if (type === 'meal') endpoint = 'meals';
    if (type === 'healthCheck') endpoint = 'health-checks';

    async function handleDelete(e) {
        e.preventDefault();
        try {
            await API.deleteByID(`activity/${endpoint}`, _id);
            dispatch(loadInitialActivity());
        } catch (error) {
            console.error(error);
        }
    }

    function handleEdit(e) {
        e.preventDefault();
        if (type === 'meal') dispatch(editMeal(_id));
        if (type === 'healthCheck') dispatch(editHealthCheck(_id));
    }

    return (
        <div>
            <a onClick={handleDelete} href="#"><i  className="fas fa-times manage-icon"></i></a>
            <a onClick={handleEdit} href="#">
                <i  className="fas fa-pencil-alt manage-icon"></i>
            </a>
        </div>
    );
}
