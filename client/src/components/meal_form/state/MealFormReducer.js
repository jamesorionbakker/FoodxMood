const initialState = {
    show: false,
    ingredients: [],
    time: '',
    mealType: '',
    _id: '',
    new: false,
    edit: false,
    timeString: '',
    dateString: ''

};

function condInsert(variable){
    return variable ? [variable] : []
}

export default function MealFormReducer(state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case 'MEAL_FORM/EDIT':
            return {...initialState, ...payload };
        case 'MEAL_FORM/NEW':
            return {...initialState, ...payload};
        case 'MEAL_FORM/CHANGE':
            return {...state, ...payload};
        case 'MEAL_FORM/CLOSE':
            return {...initialState}
        default:
            return state;
    }
}
