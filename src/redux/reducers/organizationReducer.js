import {FILTRED_USERS} from "./usersReducer";

const SET_ORG_USERS = 'SET_ORG_USERS'
const SET_ORG_CLUSTER = 'SET_ORG_CLUSTER'
const SHOW_ORG_MENU = 'SHOW_ORG_MENU'
const SHOW_BACK = 'SHOW_BACK'
const FILTER_ORGANIZATION_USERS = 'FILTER_ORGANIZATION_USERS'
const FILTER_ORGANIZATION_CLUSTER = 'FILTER_ORGANIZATION_CLUSTER'
const ADD_ORGANIZATION_USERS = 'ADD_ORGANIZATION_USERS'
const ADD_ORGANIZATION_CLUSTER = 'ADD_ORGANIZATION_CLUSTER'

const initialState = {
    organizationUsers: [],
    filterOrganizationUsers: [],
    orgCluster: [],
    filterOrgCluster: [],
    showOrgMenu: false,
    showBack: true
}

export const organizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORG_USERS:
            return {...state, organizationUsers: action.payload}
        case SHOW_ORG_MENU:
            return {...state, showOrgMenu: action.payload}
        case SET_ORG_CLUSTER:
            return {...state, orgCluster: action.payload}
        case SHOW_BACK:
            return {...action, showBack: action.payload}
        case FILTER_ORGANIZATION_USERS:
            return {...state, filterOrganizationUsers: action.payload}
        case FILTER_ORGANIZATION_CLUSTER:
            return {...state, filterOrgCluster: action.payload}
        case ADD_ORGANIZATION_USERS:
            return {...state, filterOrganizationUsers: [...state.filterOrganizationUsers, action.payload]}
        case ADD_ORGANIZATION_CLUSTER:
            return {...state, filterOrgCluster: [...state.filterOrgCluster, action.payload]}
        default:
            return state

    }
}


export const getOrganizationUsers = (payload) => {
    return {
        type: SET_ORG_USERS,
        payload
    }
}
export const showOrgMenu = (payload) => {
    return {
        type: SHOW_ORG_MENU,
        payload
    }
}
export const getOrgCluster = (payload) => {
    return {
        type: SET_ORG_CLUSTER,
        payload
    }
}
export const changeSowBack = (payload) => {
    return {
        type: SHOW_BACK,
        payload
    }
}
export const filtredOrganization = (payload) => {
    return {
        type: FILTER_ORGANIZATION_USERS,
        payload
    }
}
export const filtredOrganizationCluster = (payload) => {
    return {
        type: FILTER_ORGANIZATION_CLUSTER,
        payload
    }
}
export const addOrganization = (payload) => {
    return {
        type: ADD_ORGANIZATION_USERS,
        payload
    }
}
export const addOrganizationCluster = (payload) => {
    return {
        type: ADD_ORGANIZATION_CLUSTER,
        payload
    }
}