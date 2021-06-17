export const GET_TASK_USERS = 'GET_TASK_USERS';
export const FILTRED_TASK_USERS = 'FILTRED_TASK__USERS';

const initialState = {
    typeTask: [],
    filterTypeTasks: []
}

export const typeTaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASK_USERS :
            return {
                ...state,
                typeTask: action.payload
            }
        case FILTRED_TASK_USERS:
            return {...state,filterTypeTasks: action.payload}
        default:
            return state;
    }
}

export const getUsersTaskAction = (payload) => {
    return {
        type: GET_TASK_USERS,
        payload
    }
}

export const filtredTaskUsers = (payload) => {
    return{
        type: FILTRED_TASK_USERS,
        payload
    }
}
