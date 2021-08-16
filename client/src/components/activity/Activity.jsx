import React, { useEffect } from 'react';
import './Activity.scss';
import DateBlock from './DateBlock.jsx';
import AddButtonsContainer from 'components/activity/AddButtonsContainer';
import MealForm from 'components/meal_form/MealForm';
import * as FeedArray from './utils/feedArray';
import { useDispatch, useSelector } from 'react-redux';
import { setActivity } from 'components/activity/state/ActivityActions';
import HealthCheckForm from 'components/health_check_form/HealthCheckForm';
import  Spinner from 'react-bootstrap/Spinner';

export default function Activity(props) {
    const dispatch = useDispatch();
    let state = useSelector((state) => state);
    let loaded = !state.activity.loading
    
    useEffect( () => {
        dispatch(setActivity());
    }, [state.view.currentView, state.activity.filter]);
    
    return (
        <div className="activity-container">
            {loaded ? <div>
                <AddButtonsContainer />
                <MealForm />
                <HealthCheckForm />
                <hr />
                {FeedArray.build(state.activity.data).map((dateBlock, index) => {
                    return <DateBlock key={index} index={index} entries={dateBlock} />;
                })}
            </div> : <Spinner animation='border' className="loading-spinner"/>}
        </div>
    );
}
