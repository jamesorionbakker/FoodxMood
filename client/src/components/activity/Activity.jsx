import React, { useEffect } from 'react';
import './Activity.scss';
import DateBlock from './DateBlock.jsx';
import ActivityControls from 'components/activity/ActivityControls';
import MealForm from 'components/meal_form/MealForm';
import * as FeedArray from './utils/feedArray';
import { useDispatch, useSelector } from 'react-redux';
import { loadInitialActivity, loadMoreActivity } from 'components/activity/state/ActivityActions';
import HealthCheckForm from 'components/health_check_form/HealthCheckForm';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

export default function Activity(props) {
    const dispatch = useDispatch();
    let state = useSelector((state) => state);
    let { totalEntriesCount, localEntriesCount, loadingInitial, loadingMore } = useSelector(
        (state) => state.activity
    );

    useEffect(() => {
        dispatch(loadInitialActivity());
    }, [state.view.currentView, state.activity.filters]);

    return (
        <div className="activity-container">
            <ActivityControls />
            <MealForm />
            <HealthCheckForm />
            {loadingInitial ? (
                <Spinner animation="border" className="loading-spinner" />
            ) : (
                <div>
                    <hr />
                    {/* ENTRIES FEED*/}
                    {FeedArray.build(state.activity.data).map((dateBlock, index) => {
                        return <DateBlock key={index} index={index} entries={dateBlock} />;
                    })}
                    {/* LOADED ENTRIES MESSAGE */}
                    <div style={{ textAlign: 'center' }}>
                        <em style={{ fontSize: '.8em' }}>
                            viewing {localEntriesCount} of {totalEntriesCount}
                        </em>
                    </div>
                    {/* LOAD MORE ENTRIES BUTTON */}
                    {totalEntriesCount > localEntriesCount && (
                        <div className="load-more-button-container">
                            <hr />
                            <Button
                                style={{ width: '100%' }}
                                className="button-dark-brown"
                                onClick={() => {
                                    dispatch(loadMoreActivity());
                                }}>
                                {loadingMore ? (
                                    'Loading...'
                                ) : (
                                    <>
                                        Load
                                        {totalEntriesCount - localEntriesCount > 10
                                            ? ' 10 More'
                                            : ` ${
                                                  totalEntriesCount - localEntriesCount
                                              } Remaining`}{' '}
                                        Entries
                                    </>
                                )}
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
