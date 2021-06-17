export const GET_EXPLAIN = 'GET_EXPLAIN';
export const FILTRED_EXPLAIN = 'FILTRED_EXPLAIN';

const initialState = {
    explainClose: [],
    filterExplain: []
}

export const typeExplainReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EXPLAIN :
            return {
                ...state,
                explainClose: action.payload
            }
        case FILTRED_EXPLAIN:
            return {...state,filterExplain: action.payload}
        default:
            return state;
    }
}

export const getExplainCloseAction = (payload) => {
    return {
        type: GET_EXPLAIN,
        payload
    }
}

export const filtredCloseData = (payload) => {
    return{
        type: FILTRED_EXPLAIN,
        payload
    }
}
