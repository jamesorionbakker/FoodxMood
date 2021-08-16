import axios from 'axios';

export const get = async (route) => {
    console.log('api get: ' + route);
    let response = await axios({
        method: 'get',
        url: `/api/${route}`
    });
    return response.data;
};

export const post = async (route, data) => {
    let response = await axios({
        method: 'post',
        url: `/api/${route}`,
        data,
    });
    return response.data;
};

export const put = async (route, data) => {
    let response = await axios({
        method: 'put',
        url: `/api/${route}`,
        data,
    });
    return response.data;
};

export const deleteByID = async (route, _id) => {
    let response = await axios({
        method: 'delete',
        url: `/api/${route}/${_id}`,
    });
    return response.data;
};
