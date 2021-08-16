import * as API from 'components/common/utils/api.js';


function loadingActivity(){
    return {
        type: 'ACTIVITY/LOADING'
    }
}

export  function setActivity() {
    return async (dispatch, getState) => {
        try {
            dispatch(loadingActivity())
            let filter = getState().activity.filter
            let response = await API.get(`activity/${filter}`);
            let data = Object.fromEntries(response.map((entry)=>{ //CONVERTS ARRAY TO OBJECT KEYED BY _ID
                let { _id } = entry
                return [_id, entry]
            }))
            dispatch({type: 'ACTIVITY/SET_DATA', payload: {data, loading: false}})
        } catch (error) {
            console.log(error)
        }
    };
}

export function setFilter(payload) {
    return {
        type: 'ACTIVITY/SET_FILTER',
        payload
    }
}