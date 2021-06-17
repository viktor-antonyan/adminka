export const GET_RESULTPAGE = 'GET_RESULTPAGE';
export const FILTRED_RESULTPAGE = 'FILTRED_RESULTPAGE';

const initialState = {
    resultPage: [],
    filterResultPage: []
}

export const typeResultReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESULTPAGE :
            return {
                ...state,
                resultPage: action.payload
            }
        case FILTRED_RESULTPAGE:
            return {...state,filterResultPage: action.payload}
        default:
            return state;
    }
}

export const getResultAction = (payload) => {
    return {
        type: GET_RESULTPAGE,
        payload
    }
}

export const filtredResult = (payload) => {
    return{
        type: FILTRED_RESULTPAGE,
        payload
    }
}
