import * as API from 'components/common/utils/api.js';


export  function setActivity(view) {
    return async (dispatch, getState) => {
        if (!view) view = getState().activity.view;
        let response = await API.get(`activity/${view}`);
        let data = Object.fromEntries(response.map((entry)=>{ //CONVERTS ARRAY TO OBJECT KEYED BY _ID
            let { _id } = entry
            return [_id, entry]
        }))
        dispatch({type: 'ACTIVITY/SET_DATA', payload: {view, data}})
    };
}