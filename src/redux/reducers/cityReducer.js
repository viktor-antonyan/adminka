export const GET_CITY = 'GET_CITY';
export const FILTRED_CITY = 'FILTRED_CITY';

const initialState = {
    city: [],
    filterCity: []
}
export const cityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITY :
            return {
                ...state,
                city: action.payload
            }
        case FILTRED_CITY:
            return {...state, filterCity: action.payload}
        default:
            return state;
    }
}
export const getCityAction = (payload) => {
    return {
        type: GET_CITY,
        payload
    }
}
export const filtredCity = (payload) => {
    return {
        type: FILTRED_CITY,
        payload
    }
}
