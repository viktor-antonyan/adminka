export const GET_FINISHDASHBOARD = 'GET_FINISHDASHBOARD';
export const FILTRED_FINISHDASHBOARD = 'FILTRED_FINISHDASHBOARD';

const initialState = {
    finish: [],
    filterfinish: []
}

export const finishDashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FINISHDASHBOARD :
            return {
                ...state,
                finish: action.payload
            }
        case FILTRED_FINISHDASHBOARD:
            return {...state, filterfinish: action.payload}
        default:
            return state;
    }
}

export const finishDashboardAction = (payload) => {
    return {
        type: GET_FINISHDASHBOARD,
        payload
    }
}

export const filtredfinishDashboard = (payload) => {
    return {
        type: FILTRED_FINISHDASHBOARD,
        payload
    }
}
