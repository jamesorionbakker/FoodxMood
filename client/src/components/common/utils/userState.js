export default class UserState {
    constructor(token) {
        if (token && !token.expired()) {
            this.accessToken = token;
            let { username, firstName, lastName } = token;
            this.username = username;
            this.firstName = firstName;
            this.lastName = lastName;
            this.isLoggedIn = true
        } else {
            this.accessToken = null
            this.username = '';
            this.firstName = '';
            this.lastName = '';
            this.isLoggedIn = false
        }
    }
}
