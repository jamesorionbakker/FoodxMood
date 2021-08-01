const initialState = {
    activity: {
        active: true,
        filter: 'all'
    }
};


export default function ViewReducer(state = initialState, action) {
    let payload = action.payload
    switch (action.type) {
        case 'VIEW/ACTIVITY':
            return { ...initialState, ...payload };
        default:
            return state;
    }
}
