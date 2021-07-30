const initialState = {
    show: false,
    ingredients: [],
    time: '',
    mealType: '',
    _id: '',
    new: false,
    edit: false,
    timeString: '',
    dateString: '',
};

export default function MealFormReducer(state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case 'MEAL_FORM/EDIT':
            return { ...initialState, ...payload };
        case 'MEAL_FORM/NEW':
            return { ...initialState, ...payload };
        case 'MEAL_FORM/CHANGE':
            return { ...state, ...payload };
        case 'MEAL_FORM/CLOSE':
            return { ...initialState };
        case 'MEAL_FORM/DELETE_INGREDIENT':
            let ingredients = state.ingredients.filter(
                (ingredient) => ingredient !== payload
            );
            return {
                ...state,
                ingredients,
            };
        default:
            return state;
    }
}
