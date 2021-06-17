export const GET_ATRIBUTE = 'GET_ATRIBUTE';
export const FILTRED_ATRIBUTE = 'FILTRED_ATRIBUTE';

const initialState = {
    atribute: [],
    filterAtribute: []
}

export const atributeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ATRIBUTE :
            return {
                ...state,
                atribute: action.payload
            }
        case FILTRED_ATRIBUTE:
            return {...state, filterAtribute: action.payload}
        default:
            return state;
    }
}

export const getAtributeAction = (payload) => {
    return {
        type: GET_ATRIBUTE,
        payload
    }
}

export const filtredAtribute = (payload) => {
    return {
        type: FILTRED_ATRIBUTE,
        payload
    }
}
