import { AccessToken } from 'components/common/utils/accessToken.js';
import { setUserState } from 'components/common/state/UserStateActions.js';
import UserState from 'components/common/utils/userState';

export function showLoginForm(payload) {
    return {
        type: 'LOGIN_FORM/SHOW',
    };
}

export function setLoginForm(payload) {
    return {
        type: 'LOGIN_FORM/SET',
        payload,
    };
}
export function resetLoginForm() {
    return {
        type: 'LOGIN_FORM/RESET',
    };
}

export function logIn() {
    return async (dispatch, getState) => {
        try {
            let { username, password } = getState().loginForm;
            let response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            if (response.status !== 200) {
                let errorMessage = await response.json();
                throw new Error(errorMessage);
            }
            let token = new AccessToken(await response.json());
            dispatch(setUserState(new UserState(token)));
            dispatch(resetLoginForm());
        } catch (error) {
            console.log(error);
            if (error.message === 'invalid username') {
                dispatch(setLoginForm({ invalidPassword: false, invalidUsername: true }));
            }
            if (error.message === 'invalid password') {
                dispatch(setLoginForm({ invalidPassword: true, invalidUsername: false }));
            }
        }
    };
}
