const initialState = { data: {}, loading: true };

export default function ActivityReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACTIVITY/SET_DATA':
            return { ...action.payload }
        case 'ACTIVITY/LOADING':
            return { ...state, loading: true}
        default:
            return state;
    }
}
