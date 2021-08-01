import {validate as validateEmail } from 'email-validator'

export function password(value){
    let valid = /^\w{1,}$/i.test(value)
    let error = valid ? '' : 'Invalid Password'
    return {valid, error}
}

export function email(value){

    let valid = validateEmail(value)
    let error = valid ? '' : 'Invalid Email Address'
    return {valid, error}

}

export function name(value){
    let valid = /^\w{1,}$/i.test(value)
    let error = valid ? '' : 'Invalid Name'
    return {valid, error}
}