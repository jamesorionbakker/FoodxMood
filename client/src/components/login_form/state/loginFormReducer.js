const initialState = {
    username: '',
    password: '',
    show: false,
    invalidPassword: false,
    invalidUsername: false,
};

export default function LoginFormReducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case 'LOGIN_FORM/SET':
            return { ...state, ...payload };
        case 'LOGIN_FORM/SHOW':
            return { ...state, show: true };
        case 'LOGIN_FORM/RESET':
            return { ...initialState };
        default:
            return state;
    }
}
