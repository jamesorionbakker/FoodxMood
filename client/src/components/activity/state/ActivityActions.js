import * as API from 'components/common/utils/api.js';

function objectFromArray(inputArray) {
    return Object.fromEntries(
        inputArray.map((entry) => {
            //CONVERTS ARRAY TO OBJECT KEYED BY _ID
            let { _id } = entry;
            return [_id, entry];
        })
    );
}

function loadingInitialActivity() {
    return {
        type: 'ACTIVITY/LOADING_INITIAL',
    };
}

function loadingMoreActivity() {
    return {
        type: 'ACTIVITY/LOADING_MORE',
    };
}

function buildKeywordQuery(keywords) {
    let mealQuery = keywords.map((keyword) => {
        return {
            ingredients: { $elemMatch: { name: { $regex: keyword, $options: 'i' } } },
        };
    });
    let healthCheckQuery = keywords.map((keyword) => {
        return {
            symptoms: { $elemMatch: { description: { $regex: keyword, $options: 'i' } } },
        };
    });
    let mealTypeQuery = keywords.map((keyword) => {
        return {
            mealType: { $regex: keyword, $options: 'i' },
        };
    });

    return {
        $or: [...healthCheckQuery, ...mealQuery, ...mealTypeQuery],
    };
}

function buildQuery(getState) {
    let andArray = [];
    andArray.push(getState().activity.filters.type);
    console.log(andArray);
    let keywords = getState().activity.filters.keywords;
    if (keywords.length > 0) {
        andArray.push(buildKeywordQuery(keywords));
    }
    console.log(andArray);
    return { $and: andArray };
}

export function loadInitialActivity() {
    return async (dispatch, getState) => {
        try {
            dispatch(loadingInitialActivity());
            let query = buildQuery(getState);
            let { data: dataArray, totalEntryCount } = await API.get(
                `activity/?filter=${JSON.stringify(query)}`
            );
            dispatch({
                type: 'ACTIVITY/INSERT_INITIAL_ACTIVITY',
                payload: {
                    data: objectFromArray(dataArray),
                    localEntriesCount: dataArray.length,
                },
            });
            dispatch({
                type: 'ACTIVITY/SET_TOTAL_ENTRIES_COUNT',
                payload: totalEntryCount,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

export function loadMoreActivity() {
    return async (dispatch, getState) => {
        try {
            dispatch(loadingMoreActivity());
            let query = buildQuery(getState);
            let { data: dataArray, totalEntryCount } = await API.get(
                `activity/?filter=${JSON.stringify(query)}&skip=${getState().activity.localEntriesCount}`
            );
            console.log(dataArray)
            dispatch({
                type: 'ACTIVITY/INSERT_MORE_ACTIVITY',
                payload: {
                    data: objectFromArray(dataArray),
                },
            });
            dispatch(incrementLocalEntryCount(dataArray.length));
        } catch (error) {
            console.log(error);
        }
    };
}

export function insertEntryLocal(newEntry) {
    return (dispatch) => {
        dispatch({
            type: 'ACTIVITY/INSERT_ENTRY_LOCAL',
            payload: { [newEntry._id]: newEntry },
        });
        dispatch(incrementLocalEntryCount());
    };
}

export function updateEntryLocal(updateEntry) {
    console.log({ [updateEntry._id]: updateEntry });
    return (dispatch) => {
        dispatch({
            type: 'ACTIVITY/UPDATE_ENTRY_LOCAL',
            payload: { [updateEntry._id]: updateEntry },
        });
    };
}

function incrementLocalEntryCount(x) {
    return {
        type: 'ACTIVITY/INCREMENT_LOCAL_ENRTY_COUNT',
        payload: x,
    };
}

function decrementLocalEntryCount(x) {
    return {
        type: 'ACTIVITY/DECREMENT_LOCAL_ENRTY_COUNT',
        payload: x,
    };
}

export function setFilterType(query) {
    return {
        type: 'ACTIVITY/FILTER/SET_TYPE',
        payload: query,
    };
}

export function addFilterKeyword(keyword) {
    return {
        type: 'ACTIVITY/FILTER/ADD_KEYWORD',
        payload: keyword,
    };
}
export function deleteFilterKeyword(payload) {
    return {
        type: 'ACTIVITY/FILTER/DELETE_KEYWORD',
        payload,
    };
}
