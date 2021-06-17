export const GET_REGIONS = 'GET_REGIONS';
export const FILTRED_REGIONS = 'FILTRED_REGIONS';

const initialState = {
    regions: [],
    filterRegions: []
}

export const regionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGIONS :
            return {
                ...state,
                regions: action.payload
            }
        case FILTRED_REGIONS:
            return {...state, filterRegions: action.payload}
        default:
            return state;
    }
}

export const getRegions = (payload) => {
    return {
        type: GET_REGIONS,
        payload
    }
}

export const filtredRegions = (payload) => {
    return {
        type: FILTRED_REGIONS,
        payload
    }
}
