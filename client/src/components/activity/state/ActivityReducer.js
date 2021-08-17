const initialState = { data: {}, loading: true, filter: {$or: [ {type:'meal'}, {type: 'healthCheck'}]} };

export default function ActivityReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACTIVITY/SET_DATA':
            return {...state, ...action.payload }
        case 'ACTIVITY/LOADING':
            return { ...state, loading: true}
        case 'ACTIVITY/SET_FILTER':
            return {...state, filter: action.payload}
        default:
            return state;
    }
}
