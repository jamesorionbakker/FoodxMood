import React from 'react';
import LoginForm from '../login_form/LoginForm';
import './Header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import CurrentUser from 'components/header/CurrentUser'
import UserMenu from 'components/user_menu/UserMenu';
import { useSelector } from 'react-redux';


export default function Header() {
    let userState = useSelector(state => state.UserState)

    return (
        <Container fluid className="header-container">
            <Row className="header">
                <Col xs={12} sm="auto" className="logo">
                    <h3>Food <span className="x" >x</span> Mood</h3>
                </Col>
                <Col xs={12} md={true} className="filler"></Col>
                <Col xs={12} md={'auto'} className="login">
                    {userState.isLoggedIn ? <UserMenu /> : <LoginForm/>}
                </Col>
            </Row>
            
        </Container>
    );
}
