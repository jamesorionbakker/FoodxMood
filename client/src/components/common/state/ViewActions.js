import * as activityActions from "components/activity/state/ActivityActions"

export function setCurrentView(view){
    return {
        type: 'VIEW/SET_CURRENT',
        payload: view
    }
}

export function setViewToActivity(payload){
    return (dispatch) => {
        dispatch(activityActions.setFilter(payload))
        dispatch(setCurrentView('activity'))
    }
}

export function setViewToAnalysis(payload){
    return (dispatch) => {
        dispatch(setCurrentView('analysis'))
    }
}