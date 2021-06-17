export const GET_WORKS = 'GET_WORKS';
export const FILTRED_WORKS = 'FILTRED_WORKS';

const initialState = {
    works: [],
    filterWorks: []
}

export const typeWorkReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORKS :
            return {
                ...state,
                works: action.payload
            }
        case FILTRED_WORKS:
            return {...state,filterWorks: action.payload}
        default:
            return state;
    }
}

export const getWorksAction = (payload) => {
    return {
        type: GET_WORKS,
        payload
    }
}

export const filtredWorks = (payload) => {
    return{
        type: FILTRED_WORKS,
        payload
    }
}
