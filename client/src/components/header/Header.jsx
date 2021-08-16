import React from 'react';
import LoginForm from '../login_form/LoginForm';
import './Header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
//import CurrentUser from 'components/header/CurrentUser'
import UserMenu from 'components/user_menu/UserMenu';
import { useDispatch, useSelector } from 'react-redux';
import { showUserOptions } from 'components/user_menu/state/UserMenuActions';

export default function Header() {
    let loggedIn = useSelector((state) => state.UserState.isLoggedIn);
    let mobile = useSelector((state) => state.viewport.mobile);
    let dispatch = useDispatch()

    function UserMenuButton() {
        return (
            <div>
                <h2>
                    Hello, {useSelector((state) => state.UserState.firstName)}
                        <Button className="user-menu-button"
                            variant="outline-light"
                            style={{ marginLeft: '20px', color: 'white', borderColor: 'white' }}
                            onClick={() => dispatch(showUserOptions())}>
                            <i className="fas fa-bars"></i>
                        </Button>
                </h2>
            </div>
        )
    }

    return (
        <Container fluid className="header-container">
            <Row className="header">
                <Col xs={12} md={true} className="logo">
                    <h2>
                        Food <span className="x">x</span> Mood{' '}
                    </h2>
                </Col>
                <Col xs={0} md={true} className="filler"></Col>
                <Col xs={0} md={'auto'} className="login">
                    {loggedIn && !mobile && <UserMenuButton />}
                    {!loggedIn && !mobile && <LoginForm />}
                </Col>
            </Row>
        </Container>
    );
}
