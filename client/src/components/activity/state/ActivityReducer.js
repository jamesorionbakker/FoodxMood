const initialState = { view: 'all', data: {} };

export default function ActivityReducer(state = initialState, action) {
    switch (action.type) {
        case 'ACTIVITY/SET_DATA':
            return { ...action.payload }
        default:
            return state;
    }
}
