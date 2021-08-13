import { validate as validateEmail } from 'email-validator';

export function password(value) {
    let errorMessage = 'Password must be at least 8 characters with at least one capital letter and one number'
    if (/\s/.test(value)) {
        return { valid: false, error: 'Password cannot contain spaces. ' + errorMessage }
    }
    if (!/^\S{8,}$/i.test(value)) {
        return { valid: false, error: errorMessage };
    }
    if (!/[A-Z]/.test(value)) {
        return { valid: false, error: errorMessage }
    }
    if (!/\d/.test(value)) {
        return { valid: false, error: errorMessage }
    }
    return { valid: true, error: '' };
}

export function email(value) {
    let valid = validateEmail(value);
    let error = valid ? '' : 'Invalid Email Address';
    return { valid, error };
}

export function name(value) {
    let valid = /^\w{1,}/i.test(value);
    let error = valid ? '' : 'Invalid Name';
    return { valid, error };
}
