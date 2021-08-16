import React from 'react';
import './NavigationMenuMobile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { ViewActivity } from './common/state/ViewActions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { showUserOptions } from './user_menu/state/UserMenuActions';

export default function Sidebar(props) {
    let dispatch = useDispatch();
    let viewportWidth = useSelector((state) => state.view.viewportWidth);
    return (
        <div className="navigation-menu-mobile-container">
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <div className="nav-item">
                            <i className="fas fa-list-ul"></i><br/>
                            <a
                                href="#"
                                onClick={() => {
                                    dispatch(ViewActivity('all'));
                                }}>
                                Activity
                            </a>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="nav-item">
                            <i className="fas fa-chart-area"></i>
                            <br />

                            <a
                                href="#"
                                onClick={() => {
                                    dispatch(ViewActivity('all'));
                                }}>
                                Analysis
                            </a>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className="nav-item">
                            <i className="fas fa-cog"></i>
                            <br />
                            <a
                                href="#"
                                onClick={() => {
                                    dispatch(showUserOptions())
                                }}>
                                Settings
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <div className="nav-group">
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
            </div> */}
        </div>
    );
}
