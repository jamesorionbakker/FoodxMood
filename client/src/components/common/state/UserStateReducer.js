import UserState from '../utils/userState'


export default function UserStateReducer(state = new UserState(), action){
    switch (action.type){
        case 'USERSTATE/SET':
            return action.payload
        default: return state
    }
}