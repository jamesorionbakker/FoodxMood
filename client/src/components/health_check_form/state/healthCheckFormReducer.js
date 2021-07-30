const initialState = {
    show: false,
    symptoms: [],
    time: '',
    mood: null,
    _id: '',
    new: false,
    edit: false,
    dateString: '',
    timeString: '',
};

export default function HealtCheckFormReducer(state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case 'HEALTH_CHECK_FORM/EDIT':
            return { ...initialState, ...payload };
        case 'HEALTH_CHECK_FORM/NEW':
            return { ...initialState, ...payload };
        case 'HEALTH_CHECK_FORM/DELETE_SYMPTOM':
            let symptoms = state.symptoms.filter(
                (symptom) => symptom !== payload
            );
            return { ...state, symptoms };
        case 'HEALTH_CHECK_FORM/CHANGE':
            return { ...state, ...payload };
        case 'HEALTH_CHECK_FORM/CLOSE':
            return { ...initialState };
        default:
            return state;
    }
}
