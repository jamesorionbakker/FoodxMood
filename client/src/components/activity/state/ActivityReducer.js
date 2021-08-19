const initialState = {
    data: {},
    loadingInitial: false,
    loadingMore: false,
    filters: {
        type: { $or: [{ type: 'meal' }, { type: 'healthCheck' }] },
        keywords: [],
    },
    localEntriesCount: 0,
    totalEntriesCount: 0
};

export default function ActivityReducer(state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case 'ACTIVITY/INSERT_INITIAL_ACTIVITY':
            return { ...state, ...payload, loadingInitial: false};
        case 'ACTIVITY/INSERT_MORE_ACTIVITY':
            return { ...state, data: {...state.data, ...payload.data}, loadingMore: false};
        case 'ACTIVITY/INSERT_ENTRY_LOCAL':
            return { ...state, data: {...state.data, ...payload} }
        case 'ACTIVITY/UPDATE_ENTRY_LOCAL':
            return { ...state, data: {...state.data, ...payload} }
        case 'ACTIVITY/SET_TOTAL_ENTRIES_COUNT':
            return { ...state, totalEntriesCount: payload}
        case 'ACTIVITY/INCREMENT_LOCAL_ENRTY_COUNT':
            return { ...state, localEntriesCount: state.localEntriesCount + payload }
        case 'ACTIVITY/DECREMENT_LOCAL_ENRTY_COUNT':
            return { ...state, localEntriesCount: state.localEntriesCount - payload }
        case 'ACTIVITY/LOADING_INITIAL':
            return { ...state, loadingInitial: true };
        case 'ACTIVITY/LOADING_MORE':
            return { ...state, loadingMore: true };
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
