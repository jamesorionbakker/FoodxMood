

export default class UserState {
    constructor(token) {
        if (token && !token.expired()) {
            console.log('valid token')
            this.accessToken = token;
            let { username } = token;
            this.username = username;
            this.isLoggedIn = true
        } else {
            this.accessToken = null
            this.username = '';
            this.isLoggedIn = false
        }
    }
}
