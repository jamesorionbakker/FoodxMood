import { attemptLogIn } from '../state/UserStateActions.js';
import store from '../state/Store.js';

let dispatch = store.dispatch;

function token() {
    return store.getState().UserState.accessToken;
}

export function getHeaders() {
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token().value}`,
    };
}


export async function get(route) {
    if (token().expired()) await dispatch(attemptLogIn());
    console.log('api get: ' + route);
    let response = await fetch(`/api/${route}`, {
        method: 'GET',
        headers: getHeaders(),
    });
    return await response.json();
}

export async function post(route, data) {
    if (token().expired()) await dispatch(attemptLogIn());
    console.log('api post: ' + route);
    let response = await fetch(`/api/${route}`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function put(route, data) {
    if (token().expired()) await dispatch(attemptLogIn());
    let response = await fetch(`/api/${route}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function deleteByID(route, _id) {
    if (token().expired()) await dispatch(attemptLogIn());
    let response = await fetch(`/api/${route}/${_id}`, {
        method: 'DELETE',
        headers: getHeaders(),
    });
    return await response.json();
}
