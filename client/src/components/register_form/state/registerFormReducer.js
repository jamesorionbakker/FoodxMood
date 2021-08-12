import { Password } from 'components/common/utils/formValidation';
const intitalInputState = { value: '', valid: false, touched: false, error: 'Required Field' };
const initialState = {
    show: false,
    firstName: { ...intitalInputState },
    lastName: { ...intitalInputState },
    email: { ...intitalInputState, valid: true },
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
        case 'REGISTER_FORM/TOUCH_ALL':
            let outputState = {...state}
            let response = Object.keys(state).forEach((key)=>{
                if(outputState[key].hasOwnProperty('touched')){
                    outputState[key].touched = true;
                }
            })
            return outputState
        default:
            return { ...state };
    }
}
