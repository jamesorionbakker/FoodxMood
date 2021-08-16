import * as accessToken from 'components/common/utils/accessToken.js';
import UserState from 'components/common/utils/userState';
import { hideUserOptions } from 'components/user_menu/state/UserMenuActions';
import axios from 'axios';
export function setUserState(payload) {
    return {
        type: 'USERSTATE/SET',
        payload,
    };
}

export function attemptLogIn() {
    console.log('attempting login');
    return async (dispatch, getState) => {
        try {
            let token = await accessToken.refresh(); //return access token object
            dispatch(setUserState(new UserState(token)));
        } catch (error) {
            console.log('no refresh token, login required');
            dispatch(setUserState(new UserState()));
        }
    };
}

export function LogOut() {
    return async (dispatch, getState) => {
        const token = () => getState().UserState.accessToken;
        try {
            if (token().expired()) await dispatch(attemptLogIn());
            await axios.get('/logout');
            dispatch(hideUserOptions())
            dispatch(setUserState(new UserState()));
        } catch (error) {
            console.error(error)
        }
    };
}
