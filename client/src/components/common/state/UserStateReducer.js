import UserState from 'components/common/utils/userState'

const initialState = new UserState()

export default function UserStateReducer(state = initialState, action){
    switch (action.type){
        case 'USERSTATE/SET':
            return action.payload
        default: return state
    }
}