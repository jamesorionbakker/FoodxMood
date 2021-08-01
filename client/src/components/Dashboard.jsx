import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Activity from './activity/Activity'
import { useSelector } from 'react-redux';

export default function Dashboard(props){
    let state = useSelector(state => state.view)

    return (
        <div style={{position: 'relative'}}>
            <Sidebar />
            {(state.activity.active) && <Activity />}

        </div>  
    )
}