import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Activity from './Activity'

export default function Dashboard(props){
    let [currentView, setCurrentView] =  useState('activity')
    let [activityFilter, setActivityFilter] = useState({type: ['meal','healthCheck']})

    return (
        <div>
            <Sidebar setCurrentView={setCurrentView} setActivityFilter={setActivityFilter} />
            {(currentView === 'activity') && <Activity setUserState={props.setUserState} userState={props.userState} activityFilter={activityFilter} />}
        </div>  
    )
}