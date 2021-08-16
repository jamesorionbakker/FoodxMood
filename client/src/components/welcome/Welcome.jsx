import React from 'react'
import './Welcome.scss'
import LoginForm from 'components/login_form/LoginForm'
import { useSelector } from 'react-redux';

export default function Welcome(){
    let mobile = useSelector((state) => state.viewport.mobile);

    return (
        <div className="welcome-container">
            {mobile && <div className="login-form-container">
                <LoginForm />
            </div>}
        </div>
    )
}