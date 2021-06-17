export const GET_JOURNAL = 'GET_JOURNAL'
export const GET_FILTER_JOURNAL = 'GET_FILTER_JOURNAL'
export const SHOW = 'SHOW'

const initialState = {
    journal: [],
    filterJournal: [],
    show: false
}

export const electronicJournalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOURNAL :
            return {
                ...state,
                journal: action.payload
            }
        case SHOW:
            return {...state, show: action.payload}
        case GET_FILTER_JOURNAL:
            return{...state, filterJournal: action.payload}
        default:
            return state;
    }
}

export const getJournalAction = (payload) => {
    return {
        type: GET_JOURNAL,
        payload
    }
}
export const  setShowJournal = (payload) => {
    return {
        type: SHOW,
        payload
    }
}
export const filterJournalAction = (payload) => {
    return {
        type: GET_FILTER_JOURNAL,
        payload
    }
}
