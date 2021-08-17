import React from 'react';
import './NavigationMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setViewToActivity, setViewToAnalysis } from './common/state/ViewActions';

export default function Sidebar(props) {
    let dispatch = useDispatch();
    let viewportWidth = useSelector((state) => state.view.viewportWidth);
    return (
        <div className="navigation-menu-container">
            <div className="nav-group">
                <div className="nav-group-title">
                    <h5>Your Log</h5>
                </div>
                <div
                    onClick={() => {
                        dispatch(setViewToActivity({$or: [ {type:'meal'}, {type: 'healthCheck'}]}))
                    }}
                    className="nav-item">
                    <a href="#">All Activity</a>
                </div>
                <div
                    onClick={() => {
                        dispatch(setViewToActivity({type: 'meal'}))
                    }}
                    //{ingredients: {$elemMatch: {name: 'Sriracha'}}}
                    className="nav-item">
                    <a href="#">Meals</a>
                </div>
                <div
                    onClick={() => {
                        dispatch(setViewToActivity({type: 'healthCheck'}))
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
                <div
                    className="nav-item"
                    onClick={() => {
                        dispatch(setViewToAnalysis('analysis'));
                    }}>
                    <a href="#">Food Items</a>
                </div>
                <div
                    className="nav-item"
                    onClick={() => {
                        dispatch(setViewToAnalysis('analysis'));
                    }}>
                    <a href="#">Symptoms</a>
                </div>
                <div className="nav-item-catagory"></div>
            </div>
        </div>
    );
}
