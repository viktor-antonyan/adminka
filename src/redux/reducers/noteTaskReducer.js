export const GET_NOTETASK = 'GET_NOTETASK';
export const FILTRED_NOTETASK = 'FILTRED_NOTETASK';

const initialState = {
    note: [],
    filternote: []
}

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTETASK :
            return {
                ...state,
                note: action.payload
            }
        case FILTRED_NOTETASK:
            return {...state, filternote: action.payload}
        default:
            return state;
    }
}

export const getNoteAction = (payload) => {
    return {
        type: GET_NOTETASK,
        payload
    }
}

export const filtredNote = (payload) => {
    return {
        type: FILTRED_NOTETASK,
        payload
    }
}
