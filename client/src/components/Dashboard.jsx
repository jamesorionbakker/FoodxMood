import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Activity from './activity/Activity'

export default function Dashboard(props){
    let [currentView, setCurrentView] =  useState('activity')
    let [dataType, setDataType] = useState('all')

    return (
        <div>
            <Sidebar setCurrentView={setCurrentView} setDataType={setDataType} />
            {(currentView === 'activity') && <Activity dataType={dataType} />}
        </div>  
    )
}