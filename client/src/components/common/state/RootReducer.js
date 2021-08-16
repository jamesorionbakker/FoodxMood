import {combineReducers} from 'redux'
import UserStateReducer from 'components/common/state/UserStateReducer'
import ActivityReducer from 'components/activity/state/ActivityReducer.js'
import MealFormReducer from 'components/meal_form/state/MealFormReducer.js'
import HealthCheckFormReducer from 'components/health_check_form/state/healthCheckFormReducer'
import LoginFormReducer from 'components/login_form/state/loginFormReducer'
import UserMenuReducer from 'components/user_menu/state/UserMenuReducer'
import ViewReducer from './ViewReducer'
import RegisterFormReducer from 'components/register_form/state/registerFormReducer'
import ViewportReducer from './ViewportReducer'

const rootReducer = combineReducers({
    UserState: UserStateReducer,
    activity: ActivityReducer,
    mealForm: MealFormReducer,
    healthCheckForm: HealthCheckFormReducer,
    loginForm: LoginFormReducer,
    userMenu: UserMenuReducer,
    view: ViewReducer,
    registerForm: RegisterFormReducer,
    viewport: ViewportReducer,
})

export default rootReducer