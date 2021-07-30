import store from 'components/common/state/Store';
import { unixToDateString, unixToTimeString } from 'components/common/utils/DateHandler';

export function editMeal(_id) {
    let currentEntry = store.getState().activity.data[_id];
    return {
        type: 'MEAL_FORM/EDIT',

        payload: {
            edit: true,
            show: true,
            ...currentEntry,
            timeString: unixToTimeString(currentEntry.time),
            dateString: unixToDateString(currentEntry.time),
        },
    };
}

export function formChange(payload) {
    return {
        type: 'MEAL_FORM/CHANGE',
        payload,
    };
}

export function deleteIngredient(payload) {
    return {
        type: 'MEAL_FORM/DELETE_INGREDIENT',
        payload,
    };
}

export function newMeal() {
    console.log('new meal action');
    return {
        type: 'MEAL_FORM/NEW',
        payload: {
            new: true,
            show: true,
            timeString: unixToTimeString(),
            dateString: unixToDateString(),
        },
    };
}

export function closeMealForm() {
    return {
        type: 'MEAL_FORM/CLOSE',
    };
}
