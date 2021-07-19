import React, { useState } from 'react';
import Login from './Login';
import './Header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CurrentUser from './CurrentUser'


export default function Header(props) {

    return (
        <Container fluid className="header-container">
            <Row className="header">
                <Col xs={12} sm="auto" className="logo">
                    Food <span style={{color: '#888'}}>x</span> Mood
                </Col>
                <Col xs={12} md={true} className="filler"></Col>
                <Col xs={12} md={'auto'} className="login">
                    {props.user.isLoggedIn ? <CurrentUser user={props.user} logOut = {props.logOut} /> : <Login setUser={props.setUser} />}
                </Col>
            </Row>
            
        </Container>
    );
}
