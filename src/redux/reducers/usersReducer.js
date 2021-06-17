export const GET_USERS = 'GET_USERS';
export const FILTRED_USERS = 'FILTRED_USERS';
export const ADD_USER = 'ADD_USER';

const initialState = {
    users: [],
    filterUsers: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS :
            return {
                ...state,
                users: action.payload
            }
        case FILTRED_USERS:
            return {...state, filterUsers: action.payload}
        case ADD_USER:
            return {...state, filterUsers: [...state.filterUsers, action.payload]}
        default:
            return state;
    }
}

export const getUsersAction = (payload) => {
    return {
        type: GET_USERS,
        payload
    }
}

export const filtredUsers = (payload) => {
    return {
        type: FILTRED_USERS,
        payload
    }
}
export const addUserAction = (payload) => {
    return {
        type: ADD_USER,
        payload
    }
}