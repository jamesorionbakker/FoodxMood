import React, { useEffect, useState } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import * as accessToken from './utils/accessToken.js';
import UserState from './utils/userState';

function App() {
    async function initUser(){
        try {
            let token = await accessToken.refresh();
            console.log(token);
            setUserState(new UserState(token));
        } catch(error) {
            console.log('no refresh token, login required')
            setUserState(new UserState())
        }
    };

    let [userState, setUserState] = useState(new UserState());
    useEffect(()=>initUser(),[])

    return (
        <div>
            <Header user={userState} setUserState={setUserState} />

            {userState.isLoggedIn && <Dashboard setUserState={setUserState} userState={userState} />}
        </div>
    );
}

export default App;
