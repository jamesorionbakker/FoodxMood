import React from 'react';
import Login from '../login_form/LoginForm';
import './Header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CurrentUser from 'components/header/CurrentUser'
import UserMenu from 'components/user_menu/UserMenu';


export default function Header(props) {

    return (
        <Container fluid className="header-container">
            <Row className="header">
                <Col xs={12} sm="auto" className="logo">
                    Food <span style={{color: '#888'}}>x</span> Mood
                </Col>
                <Col xs={12} md={true} className="filler"></Col>
                <Col xs={12} md={'auto'} className="login">
                    {props.user.isLoggedIn ? <UserMenu /> : <Login/>}
                </Col>
            </Row>
            
        </Container>
    );
}
