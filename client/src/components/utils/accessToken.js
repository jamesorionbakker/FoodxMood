import jwt_decode from 'jwt-decode';

export class AccessToken {
    constructor(value){
        let {exp, username} = jwt_decode(value)
        this.value = value;
        this.exp = exp
        this.username = username
    }
    getCurrSeconds() {
        return Math.ceil(Date.now() / 1000);
    }
    expired(){
        if(this.exp < this.getCurrSeconds() + 10){
            return true;
        }
        return false
    }
}

export async function refresh() {
    console.log('refreshing access token')
    let response = await fetch('/access');
    if (response.status !== 200) {
        let error = await response.json();
        throw new Error(error);
    }
    let token = await response.json();
    return new AccessToken(token)
}

export function decode(token) {
    let { username } = jwt_decode(token);
    return {
        username,
        accessToken: token,
        isLoggedIn: true,
    };
}
