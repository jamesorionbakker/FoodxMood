export function showRegisterForm(){
    return {
        type: 'REGISTER_FORM/SHOW'
    }
}
export function hideRegisterForm(){
    return {
        type: 'REGISTER_FORM/HIDE'
    }
}
export function setRegisterForm(payload){
    return {
        type: 'REGISTER_FORM/SET',
        payload
    }
}
export function validateRegisterForm(payload){
    return {
        type: 'REGISTER_FORM/VALIDATE',
        payload
    }
}