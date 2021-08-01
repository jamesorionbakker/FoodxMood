import { Password } from 'components/common/utils/formValidation';
const intitalInputState = { value: '', valid: false, touched: false, error: '' };
const initialState = {
    show: false,
    firstName: { ...intitalInputState },
    lastName: { ...intitalInputState },
    email: { ...intitalInputState },
    username: { ...intitalInputState },
    password: { ...intitalInputState },
    passwordVerify: { ...intitalInputState },
};

export default function RegisterFormReducer(state = initialState, action) {
    let payload = action.payload;
    switch (action.type) {
        case 'REGISTER_FORM/SHOW':
            return { ...state, show: true };
        case 'REGISTER_FORM/HIDE':
            return { ...state, show: false };
        case 'REGISTER_FORM/SET':
            return { ...state, ...payload };
        case 'REGISTER_FORM/VALIDATE':
            return { ...state, ...payload };
        default:
            return { ...state };
    }
}
