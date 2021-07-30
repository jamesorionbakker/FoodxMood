import store from 'components/common/state/Store'
import {unixToDateString, unixToTimeString}  from 'components/common/utils/DateHandler'


export function editHealthCheck(id) {
    let currentEntry = store.getState().activity.data[id];
    return {
        type: 'HEALTH_CHECK_FORM/EDIT',
        
        payload: {
            edit: true,
            show: true,
            ...currentEntry,
            timeString: unixToTimeString(currentEntry.time),
            dateString: unixToDateString(currentEntry.time)
        }
    }
}

export function formChange(payload) {
    return {
        type: 'HEALTH_CHECK_FORM/CHANGE',
        payload
    }
}

export function newHealthCheck() {
    console.log('new meal action')
    return {
        type: 'HEALTH_CHECK_FORM/NEW',
        payload: {
            new: true,
            show: true,
            timeString: unixToTimeString(),
            dateString: unixToDateString()
        }
    }
}
export function closeHealthCheckForm() {
    return {
        type: 'HEALTH_CHECK_FORM/CLOSE'
    }
}
