import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideUserOptions, showUserOptions } from './state/UserMenuActions';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './UserMenu.scss';
import { LogOut } from 'components/common/state/UserStateActions';
import { useState } from 'react';

export default function UserMenu() {
    let state = useSelector((state) => state.userMenu);
    let [loggingOut, setLoggingOut] = useState(false);
    const dispatch = useDispatch();
    return (
        <div>
            <h4>
                Hello, {useSelector((state) => state.UserState.firstName)}
                <Button
                    variant="outline-dark"
                    style={{ marginLeft: '20px' }}
                    onClick={() => dispatch(showUserOptions())}>
                    <i className="fas fa-bars"></i>
                </Button>
            </h4>
            <Offcanvas
                className="user-menu"
                show={state.show}
                onHide={() => dispatch(hideUserOptions())}
                placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Your Account</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="options-container">
                        <ul>
                            <li>
                                <button className="link">Account Settings</button>
                            </li>
                            <li>
                                <button className="link">Help</button>
                            </li>
                        </ul>
                    </div>
                    <div className="logout-button-container">
                        <hr />
                        <Button
                            disabled={loggingOut}
                            variant="success"
                            className="logout"
                            onClick={ async () => {
                                setLoggingOut(true)
                                await dispatch(LogOut());
                            }}>
                            {loggingOut ? 'Logging Out' : 'Log Out'}
                        </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}
