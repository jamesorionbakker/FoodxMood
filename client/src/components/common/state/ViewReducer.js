const initialState = {
    activity: {
        active: true,
        filter: 'all'
    },
    viewportWidth: 4
};


export default function ViewReducer(state = initialState, action) {
    let payload = action.payload
    switch (action.type) {
        case 'VIEW/ACTIVITY':
            return { ...initialState, ...payload };
        case 'VIEW/SET_VIEWPORT_SIZE':
            return { ...state, viewportWidth: payload}
        default:
            return state;
    }
}
