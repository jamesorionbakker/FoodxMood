import {combineReducers} from 'redux'
import UserStateReducer from 'components/common/state/UserStateReducer'
import ActivityReducer from 'components/activity/state/ActivityReducer.js'
import MealFormReducer from 'components/meal_form/state/MealFormReducer.js'
import HealthCheckFormReducer from 'components/health_check_form/state/healthCheckFormReducer'

const rootReducer = combineReducers({
    UserState: UserStateReducer,
    activity: ActivityReducer,
    mealForm: MealFormReducer,
    healthCheckForm: HealthCheckFormReducer
})

export default rootReducer