export const GET_STICKER_TYPE = 'GET_STICKER_TYPE';
export const FILTRED_STICKER_TYPE = 'FILTRED_STICKER_TYPE';

const initialState = {
    sticker: [],
    filterSticker: []
}

export const typeStickerReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STICKER_TYPE :
            return {
                ...state,
                sticker: action.payload
            }
        case FILTRED_STICKER_TYPE:
            return {...state,filterSticker: action.payload}
        default:
            return state;
    }
}

export const getStickerAction = (payload) => {
    return {
        type: GET_STICKER_TYPE,
        payload
    }
}

export const filtredSticker = (payload) => {
    return{
        type: FILTRED_STICKER_TYPE,
        payload
    }
}
