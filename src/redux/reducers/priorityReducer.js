export const GET_PRIORITY_USERS = 'GET_PRIORITY_USERS';
export const FILTRED_PRIORITY_USERS = 'FILTRED_PRIORITY__USERS';

const initialState = {
    priority: [],
    filterPriority: []
}

export const priorityReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRIORITY_USERS :
            return {
                ...state,
                priority: action.payload
            }
        case FILTRED_PRIORITY_USERS:
            return {...state,filterPriority: action.payload}
        default:
            return state;
    }
}

export const getUsersPriorityAction = (payload) => {
    return {
        type: GET_PRIORITY_USERS,
        payload
    }
}

export const filtredPriorityUsers = (payload) => {
    return{
        type: FILTRED_PRIORITY_USERS,
        payload
    }
}
