import * as accessToken from 'components/common/utils/accessToken.js';
import UserState from 'components/common/utils/userState';
import { showLoginForm } from 'components/login_form/state/loginFormActions';
import { getHeaders } from '../utils/api';

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
            dispatch(showLoginForm());
            dispatch(setUserState(new UserState()));
        }
    };
}

export function LogOut() {
    return async (dispatch, getState) => {
        const token = () => getState().UserState.accessToken;
        try {
            if (token().expired()) await dispatch(attemptLogIn());
            let response = await fetch('/logout', {
                headers: getHeaders(),
            });
            dispatch(setUserState(new UserState()));
            dispatch(showLoginForm())
        } catch (error) {
            console.error(error)
        }
    };
}
