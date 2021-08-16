import React from 'react';
import './NavigationMenuMobile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentView, setViewToActivity, setViewToAnalysis } from './common/state/ViewActions';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { showUserOptions } from './user_menu/state/UserMenuActions';

export default function Sidebar(props) {
    let dispatch = useDispatch();
    let currentView = useSelector((state) => state.view.currentView);

    return (
        <div className="navigation-menu-mobile-container">
            <Container fluid>
                <Row>
                    <Col className="col" xs={4}>
                        <div
                            className={`nav-item ${currentView === 'activity' && 'active'}`}
                            onClick={() => {
                                dispatch(setViewToActivity('all'));
                            }}>
                            <a href="#">
                                <i className="fas fa-list-ul"></i>
                                <br />
                                Activity
                            </a>
                        </div>
                    </Col>
                    <Col className="col" xs={4}>
                        <div
                            className={`nav-item ${currentView === 'analysis' && 'active'}`}
                            onClick={() => {
                                dispatch(setViewToAnalysis());
                            }}>
                            <a href="#">
                                <i className="fas fa-chart-area"></i>
                                <br />
                                Analysis
                            </a>
                        </div>
                    </Col>
                    <Col className="col" xs={4}>
                        <div
                            className="nav-item"
                            onClick={() => {
                                dispatch(showUserOptions());
                            }}>
                            <a href="#">
                                <i className="fas fa-cog"></i>
                                <br />
                                Settings
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
