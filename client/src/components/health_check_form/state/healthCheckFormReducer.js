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
    timeInputType: 'absolute',
    baselineTime: 0,
    hoursSinceBaseline: '',
    minutesSinceBaseline: ''
};

export default function HealthCheckFormReducer(state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case 'HEALTH_CHECK_FORM/EDIT':
            return { ...initialState, ...payload };
        case 'HEALTH_CHECK_FORM/NEW':
            return { ...initialState, ...payload };
        case 'HEALTH_CHECK_FORM/NEW_RELATIVE':
            return { ...initialState, ...payload, timeInputType: 'relative' };
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
