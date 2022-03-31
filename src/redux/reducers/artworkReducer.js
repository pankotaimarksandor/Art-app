import { actionTypes } from '../actionTypes'

const intialState = {
    error: null,
    artworkCards: [],
    totalItems: 0
}

export const artworkReducer = (state = intialState, action) => {
    const { type, payload } = action

    switch (type){
        case actionTypes.FETCH_ARTWORKS_BY_PAGE_SUCCESS:
            return { ...state, artworkCards: payload.artworkCards, totalItems: payload.totalItems }
        case actionTypes.FETCH_ARTWORKS_BY_PAGE_FAIL:
            return { ...state, error: payload }
        default:
            return state
    }
}

export const selectedArtworkReducer = (state = {}, action) => {
    const { type, payload } = action

    switch (type){
        case actionTypes.FETCH_SELECTED_ARTWORK:
            return { ...state, ...payload }
        case actionTypes.REMOVE_SELECTED_ARTWORK:
            return {}
        default:
            return state
    }
}