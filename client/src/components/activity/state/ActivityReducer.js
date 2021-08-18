const initialState = {
    data: {},
    loading: true,
    filters: {
        type: { $or: [{ type: 'meal' }, { type: 'healthCheck' }] },
        keywords: [],
    },
};

export default function ActivityReducer(state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case 'ACTIVITY/SET_DATA':
            return { ...state, ...payload };
        case 'ACTIVITY/LOADING':
            return { ...state, loading: true };
        case 'ACTIVITY/FILTER/SET_TYPE':
            return { ...state, filters: { ...state.filters, type: payload } };
        case 'ACTIVITY/FILTER/ADD_KEYWORD':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    keywords: [...state.filters.keywords, payload],
                },
            };
        case 'ACTIVITY/FILTER/DELETE_KEYWORD':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    keywords: state.filters.keywords.filter((keyword) => {
                        console.log(payload)
                        return keyword !== payload;
                    }),
                },
            };
        default:
            return state;
    }
}
