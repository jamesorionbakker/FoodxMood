import React from 'react';
import './Sidebar.scss';

export default function Sidebar(props) {
    return (
        <div className="sidebar-container">
            <div className="nav-group">
                <div className="nav-group-title">
                    <h5>Your Log</h5>
                </div>
                <div
                    onClick={() => {
                        props.setCurrentView('activity');
                        props.setActivityFilter({type: ['meal','healthCheck']})
                    }}
                    className="nav-item">
                    <a href="#">All Activity</a>
                </div>
                <div
                    onClick={() => {
                        props.setCurrentView('activity');
                        props.setActivityFilter({type: ['meal']})

                    }}
                    className="nav-item">
                    <a href="#">Meals</a>
                </div>
                <div
                    onClick={() => {
                        props.setCurrentView('activity');
                        props.setActivityFilter({type: ['healthCheck']})

                    }}
                    className="nav-item">
                    <a href="#">Symptoms</a>
                </div>
                <div className="nav-item-catagory"></div>
            </div>
            <div className="nav-group">
                <div className="nav-group-title">
                    <h5>Analysis</h5>
                </div>
                <div className="nav-item">
                    <a href="#">Food Items</a>
                </div>
                <div className="nav-item">
                    <a href="#">Symptoms</a>
                </div>
                <div className="nav-item-catagory"></div>
            </div>
        </div>
    );
}
