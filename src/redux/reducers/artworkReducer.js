import { actionTypes } from '../actionTypes'

const intialState = {
    error: null,
    loading: false,
    artworkCards: [],
    totalItems: 0
}

export const artworkReducer = (state = intialState, action) => {
    const { type, payload } = action

    switch (type){
        case actionTypes.FETCH_ARTWORKS_BY_PAGE_REQUEST:
            return { ...state, loading: true, error: null }
        case actionTypes.FETCH_ARTWORKS_BY_PAGE_SUCCESS:
            return { ...state, loading: false, artworkCards: payload.artworkCards, totalItems: payload.totalItems }
        case actionTypes.FETCH_ARTWORKS_BY_PAGE_FAIL:
            return { ...state, loading: false, error: payload.error }
        default:
            return state
    }
}

const selectedArtworkState = {
    loading: false,
    error: null,
    artworkDetails: {}
}

export const selectedArtworkReducer = (state = selectedArtworkState, action) => {
    const { type, payload } = action

    switch (type){
        case actionTypes.FETCH_SELECTED_ARTWORK_REQUEST:
            return { ...state, loading: true, error: null }
        case actionTypes.FETCH_SELECTED_ARTWORK_SUCCESS:
            return { ...state, loading: false, artworkDetails: payload.artworkDetails }
        case actionTypes.FETCH_SELECTED_ARTWORK_FAIL:
            return { ...state, loading: false, error: payload.error }
        case actionTypes.REMOVE_SELECTED_ARTWORK:
            return state
        default:
            return state
    }
}