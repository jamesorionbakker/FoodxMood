import * as API from 'components/common/utils/api.js';

function loadingActivity() {
    return {
        type: 'ACTIVITY/LOADING',
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

export function setActivity() {
    return async (dispatch, getState) => {
        try {
            dispatch(loadingActivity());
            let query = buildQuery(getState);
            console.log(JSON.stringify(query));
            let response = await API.get(`activity/?filter=${JSON.stringify(query)}`);
            let data = Object.fromEntries(
                response.map((entry) => {
                    //CONVERTS ARRAY TO OBJECT KEYED BY _ID
                    let { _id } = entry;
                    return [_id, entry];
                })
            );
            dispatch({ type: 'ACTIVITY/SET_DATA', payload: { data, loading: false } });
        } catch (error) {
            console.log(error);
        }
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
