import { setUserState } from '../state/Actions.js';
import store from '../state/Store.js';
import * as AccessToken from './accessToken.js';
import UserState from './userState.js';

export async function get(route) {
    let token = store.getState().UserState.accessToken;
    if(token.expired()){
        console.log('refreshing access token')
        let newToken = await AccessToken.refresh()
        store.dispatch(setUserState(new UserState(newToken)))
    }
    console.log('api get: ' + route)
    let response = await fetch(`/api/${route}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.value}`,
        },
    });
    return await response.json();
}

export async function post(route, data) {
    let token = store.getState().UserState.accessToken;
    if(token.expired()){
        console.log('refreshing access token')
        let newToken = await AccessToken.refresh()
        store.dispatch(setUserState(new UserState(newToken)))
    }
    console.log('api post: ' + route);
    let response = await fetch(`/api/${route}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function put(route, data) {
    let token = store.getState().UserState.accessToken;
    if(token.expired()){
        console.log('refreshing access token')
        let newToken = await AccessToken.refresh()
        store.dispatch(setUserState(new UserState(newToken)))
    }
    let response = await fetch(`/api/${route}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.value}`,
        },
        body: JSON.stringify(data),
    });
    return await response.json();
}

export async function deleteByID(route, _id) {
    let token = store.getState().UserState.accessToken;
    if(token.expired()){
        console.log('refreshing access token')
        let newToken = await AccessToken.refresh()
        store.dispatch(setUserState(new UserState(newToken)))
    }
    let response = await fetch(`/api/${route}/${_id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token.value}`
        }
    });
    return await response.json();
}