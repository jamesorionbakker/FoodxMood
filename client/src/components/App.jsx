import React, { useEffect } from 'react';
import Header from 'components/header/Header';
import Dashboard from './Dashboard';
import * as accessToken from './common/utils/accessToken.js';
import UserState from './common/utils/userState';
import {useSelector, useDispatch} from 'react-redux'
import {setUserState} from './common/state/Actions.js'

function App() {
    let userState = useSelector(state => state.UserState) //
    const dispatch = useDispatch()


    async function initUser() {
        try {
            let token = await accessToken.refresh(); //return access token object
            dispatch(setUserState(new UserState(token)))

        } catch (error) {
            console.log('no refresh token, login required');
            dispatch(setUserState(new UserState()))
        }
    }
    
    useEffect(() => initUser(), []);

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
