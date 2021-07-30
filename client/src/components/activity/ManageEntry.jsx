import React from 'react';
import * as API from '../common/utils/api.js';
import { useDispatch } from 'react-redux';
import { editMeal } from 'components/meal_form/state/MealFormActions';
import { setActivity } from 'components/activity/state/ActivityActions';
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
            dispatch(setActivity());
        } catch (error) {
            console.error(error);
        }
    }

    function handleEdit(e) {
        e.preventDefault();
        if (type === 'meal') dispatch(editMeal(_id));
        if (type === 'healthCheck') dispatch(editHealthCheck(_id))
    }

    return (
        <div>
            <a onClick={handleDelete} href="#">
                <i style={{ marginLeft: '10px' }} className="fas fa-times"></i>
            </a>
            <a onClick={handleEdit} href="#">
                <i
                    style={{ marginLeft: '10px' }}
                    className="fas fa-pencil-alt"></i>
            </a>
        </div>
    );
};
