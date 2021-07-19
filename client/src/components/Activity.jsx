import React, { useEffect, useState } from 'react';
import './Activity.scss';
import Entry from './Entry.jsx';
import AddButtonsContainer from './AddButtonsContainer';
import UserState from './utils/userState.js'

export default function Activity(props) {
    let {activityFilter, userState, setUserState} = props
    let [activity, setActivity] = useState([]);

    useEffect(() => {
        let {accessToken} = userState
        async function fetchData() {
            if (accessToken.expired()) {
                try {
                    let token = await accessToken.refresh();
                    console.log(token)
                    let userData = new UserState(token);
                    setUserState(userData);
                } catch {
                    setUserState(new UserState());
                }
            }
            let filters = activityFilter;
            let data = await fetch('/activity', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken.value}`,
                },
                body: JSON.stringify({ collections: filters.type }),
            });
            let response = await data.json();
            setActivity(response);
        }
        fetchData();
    }, [activityFilter, userState, setUserState]);

    return (
        <div className="activity-container">
            <AddButtonsContainer userState={props.userState} />
            {activity.map((entry) => {
                const typeEnum = {
                    meal: 'Meal',
                    healthCheck: 'Health Check',
                };
                return (
                    <Entry
                        key={entry._id}
                        ingredients={entry.ingredients && entry.ingredients}
                        type={typeEnum[entry.type]}
                        mealType={entry.mealType && entry.mealType}
                        date={
                            new Date(entry.time).getHours() +
                            ':' +
                            new Date(entry.time).getMinutes()
                        }
                        symptoms={entry.symptoms && entry.symptoms}
                        mood={entry.mood}
                    />
                );
            })}
        </div>
    );
}
