export const GET_GROUP_TYPE = 'GET_GROUP_TYPE';
export const FILTRED_GROUPS_TYPE = 'FILTRED_GROUPS_TYPE';

const initialState = {
    groups: [],
    filterGroups: []
}

export const typeGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GROUP_TYPE :
            return {
                ...state,
                groups: action.payload
            }
        case FILTRED_GROUPS_TYPE:
            return {...state,filterGroups: action.payload}
        default:
            return state;
    }
}

export const getGroupAction = (payload) => {
    return {
        type: GET_GROUP_TYPE,
        payload
    }
}

export const filtredGroups = (payload) => {
    return{
        type: FILTRED_GROUPS_TYPE,
        payload
    }
}
