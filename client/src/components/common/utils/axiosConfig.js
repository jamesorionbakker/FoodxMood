import store from 'components/common/state/Store.js';
import axios from 'axios';
import { attemptLogIn } from 'components/common/state/UserStateActions';

function getToken() {
    return store.getState().UserState.accessToken;
}

let dispatch = store.dispatch;

export const configAxios = async () => {
    axios.interceptors.request.use(
        async (config) => {
            console.log('axios: adding auth headers')
            if (getToken().expired()) await dispatch(attemptLogIn());
            config.headers = {
                Authorization: `Bearer ${getToken().value}`,
            };
            return config;
        },
        (err) => {
            console.log('axios interceptor err')
            throw new Error(err);
        }
    );
};
