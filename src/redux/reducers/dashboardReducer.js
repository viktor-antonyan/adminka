const SHOW_USERS = 'SHOW_USERS'
const SET_REQUIREMENT = 'SET_REQUIREMENT'
const IS_LOADING = 'IS_LOADING'
const FILTER_REQUIREMENTS = 'FILTER_REQUIREMENTS'
const ADD_REQUIREMENTS = 'ADD_REQUIREMENTS'
const SHOW_MAIN_MENU = 'SHOW_MAIN_MENU'
const SHOW_POPUP_ALERT = 'SHOW_POPUP_ALERT'
const IS_DELETED = 'IS_DELETED'
const IS_CHECKID = 'IS_CHECKID'

const initialState = {
    showUsers: false,
    requiremets: [],
    filterRequiremets: [],
    isLoading: true,
    showMainMenu: true,
    showPopupAlert: false,
    isDeleted: false,
    checked: false
}

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_USERS:
            return {...state, showUsers: action.payload}
        case SET_REQUIREMENT:
            return {...state, requiremets: action.payload}
        case IS_LOADING:
            return {...state, isLoading: action.payload}
        case FILTER_REQUIREMENTS:
            return {...state, filterRequiremets: action.payload}
        case ADD_REQUIREMENTS:
            return {...state, filterRequiremets: [...state.filterRequiremets, action.payload]}
        case SHOW_MAIN_MENU :
            return {...state, showMainMenu: action.payload}
        case SHOW_POPUP_ALERT :
            return {...state, showPopupAlert: action.payload}
        case IS_DELETED :
            return {...state, isDeleted: action.payload}
        case IS_CHECKID :
            return {...state, checked: action.payload}
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
export const setRequirementAction = (payload) => {
    return {
        type: SET_REQUIREMENT,
        payload
    }
}
export const isLoadingAction = (payload) => {
    return {
        type: IS_LOADING,
        payload
    }
}
export const filtredRequirements = (payload) => {
    return {
        type: FILTER_REQUIREMENTS,
        payload
    }
}
export const addRequirements = (payload) => {
    return {
        type: ADD_REQUIREMENTS,
        payload
    }
}
export const showMainMenuAction = (payload) => {
    return {
        type: SHOW_MAIN_MENU,
        payload
    }
}
export const showPopupAlertAction = (payload) => {
    return {
        type: SHOW_POPUP_ALERT,
        payload
    }
}
export const showPopupAndChangeDeleteAction = () => (dispatch) => {
    // dispatch(showPopupAlertAction(false))
    dispatch(isDeletedAction(false))
}
export const isDeletedAction = (payload) => {
    return {
        type: IS_DELETED,
        payload
    }
}
export const isCheckidAction = (payload) => {
    return {
        type: IS_CHECKID,
        payload
    }
}
