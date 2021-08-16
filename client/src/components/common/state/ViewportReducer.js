const initialState = {
    width: 4,
    mobile: false
};


export default function ViewportReducer(state = initialState, action) {
    let payload = action.payload
    switch (action.type) {
        case 'VIEWPORT/SET_WIDTH':
            console.log('setting viewport width to: ' + payload)
            return {...payload}
        default:
            return state;
    }
}
