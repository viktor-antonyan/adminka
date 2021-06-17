const IS_AUTH = 'IS_AUTH'

const initialState = {
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
}

const setIsAuth = (payload) => {
    return{
        type: IS_AUTH,
        payload
    }
}