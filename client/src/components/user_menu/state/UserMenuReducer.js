const initialState = {
    show: false
};

export default function UserOptionsReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_MENU/SHOW':
            console.log('showing')
            return {...state, show: true};
        case 'USER_MENU/HIDE':
            console.log('hiding')
            return {...state, show: false};
        default:
            return state;
    }
}
