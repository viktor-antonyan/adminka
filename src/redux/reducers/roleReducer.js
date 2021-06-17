import {act} from "@testing-library/react";

const SHOW_USERS = 'SHOW_USERS'
const SET_ROLE = 'SET_ROLE'
const IS_LOADING = 'IS_LOADING'
const FILTER_ROLE = 'FILTER_ROLE'
const ADD_ROLE = 'ADD_ROLE'

const initialState = {
    showUsers: false,
    role: [],
    filterRole: [],
    isLoading: true
}

export const roleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_USERS:
            return {...state, showUsers: action.payload}
        case SET_ROLE:
            return {...state, role: action.payload}
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        case FILTER_ROLE:
            return {...state, filterRole: action.payload}
        case ADD_ROLE:
            return {...state, filterRole: [...state.filterRole, action.payload]}
        default:
            return state;
    }
}

export const showUsers = (payload) => {
    return {
        type: SHOW_USERS,
        payload
    }
}
export const setRole = (payload) => {
    return {
        type: SET_ROLE,
        payload
    }
}
export const isLoadingAction = (payload) => {
    return {
        type: IS_LOADING,
        payload
    }
}
export const filtredRole = (payload) => {
    return {
        type: FILTER_ROLE,
        payload
    }
}
export const addRole = (payload) => {
    return {
        type: ADD_ROLE,
        payload
    }
}
