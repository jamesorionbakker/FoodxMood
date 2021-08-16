import React from 'react';
import './NavigationMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ViewActivity } from './common/state/ViewActions';


export default function Sidebar(props) {
    
    let dispatch = useDispatch();
    let viewportWidth = useSelector(state => state.view.viewportWidth)
    return (
        <div className='navigation-menu-container'>
            <div className="nav-group">
                <div className="nav-group-title">
                    <h5>Your Log</h5>
                </div>
                <div
                    onClick={() => {
                        dispatch(ViewActivity('all'))
                    }}
                    className="nav-item">
                    <a href="#">All Activity</a>
                </div>
                <div
                    onClick={() => {
                        dispatch(ViewActivity('meals'))
                    }}
                    className="nav-item">
                    <a href="#">Meals</a>
                </div>
                <div
                    onClick={() => {
                        dispatch(ViewActivity('health-checks'))
                    }}
                    className="nav-item">
                    <a href="#">Wellness</a>
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