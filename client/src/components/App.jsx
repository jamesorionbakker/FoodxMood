import React, { useEffect } from 'react';
import Header from 'components/header/Header';
import Dashboard from './Dashboard';
import {useSelector, useDispatch} from 'react-redux'
import {attemptLogIn } from './common/state/UserStateActions.js'

function App() {
    let userState = useSelector(state => state.UserState)
    const dispatch = useDispatch()


    useEffect(() => dispatch(attemptLogIn()), []);

    return (
        <div>
            <Header user={userState} />

            {userState.isLoggedIn && (
                <Dashboard/>
            )}
        </div>
    );
}

export default App;
