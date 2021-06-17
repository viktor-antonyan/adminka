export const GET_TYPE_OBJECT = 'GET_TYPE_OBJECT';
export const FILTRED_TYPE_OBJECTE = 'FILTRED_TYPE_OBJECT';

const initialState = {
    typeObject: [],
    filterTypeObject: []
}

export const typeObjectReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TYPE_OBJECT :
            return {
                ...state,
                typeObject: action.payload
            }
        case FILTRED_TYPE_OBJECTE:
            return {...state, filterTypeObject: action.payload}
        default:
            return state;
    }
}

export const getTypeObjectAction = (payload) => {
    return {
        type: GET_TYPE_OBJECT,
        payload
    }
}

export const filtredTypeObject = (payload) => {
    return {
        type: FILTRED_TYPE_OBJECTE,
        payload
    }
}
