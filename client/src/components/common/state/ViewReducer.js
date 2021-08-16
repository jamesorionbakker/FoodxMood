const initialState = {
    currentView: 'activity',
    activity: {
        active: true,
        filter: 'all'
    }
};


export default function ViewReducer(state = initialState, action) {
    let payload = action.payload
    switch (action.type) {
        case 'VIEW/SET_CURRENT':
            return { ...initialState, currentView: payload };
        default:
            return state;
    }
}
