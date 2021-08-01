import React, { useEffect } from 'react';
import './Activity.scss';
import DateBlock from './DateBlock.jsx';
import AddButtonsContainer from 'components/activity/AddButtonsContainer';
import MealForm from 'components/meal_form/MealForm';
import * as FeedArray from './utils/feedArray';
import { useDispatch, useSelector } from 'react-redux';
import { setActivity } from 'components/activity/state/ActivityActions';
import HealthCheckForm from 'components/health_check_form/HealthCheckForm';

export default function Activity(props) {
    const dispatch = useDispatch();
    let state = useSelector((state) => state);

    useEffect(() => {
        dispatch(setActivity());
    }, [state.view]);

    let activityFeed = FeedArray.create(state.activity.data);
    
    return (
        <div className="activity-container">
            <div>
                <AddButtonsContainer />
                <MealForm />
                <HealthCheckForm />
                {activityFeed.map((dateBlock, index) => {
                    return <DateBlock key={index} index={index} entries={dateBlock} />;
                })}
            </div>
        </div>
    );
}
