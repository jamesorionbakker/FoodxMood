import React from 'react';
import NavigationMenu from './NavigationMenu';
import NavigationMenuMobile from 'components/NavigationMenuMobile';
import Activity from './activity/Activity';
import { useSelector } from 'react-redux';
import LoginForm from './login_form/LoginForm';
import './Dashboard.scss';
import UserMenu from './user_menu/UserMenu';

export default function Dashboard(props) {
    let viewState = useSelector((state) => state.view);
    let loggedIn = useSelector((state) => state.UserState.isLoggedIn)
    let mobile = useSelector((state) => state.viewport.mobile);

    return (
        <div className="dashboard-container" style={{ position: 'relative' }}>


            {loggedIn && mobile ? <NavigationMenuMobile /> : <NavigationMenu />}
            {loggedIn && viewState.activity.active && <Activity />}
            {loggedIn && <UserMenu/>}

            {!loggedIn && mobile && <LoginForm />}
        </div>
    );
}
