import { actionTypes } from '../actionTypes'

const initialState = {
    loading: false,
    error: null,
    searchCards: [],
}

export const searchReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case actionTypes.SEARCH_BY_QUERY_REQUEST:
            return { ...state, loading: true, error: null }
        case actionTypes.SEARCH_BY_QUERY_SUCCESS:
            return { ...state, loading: false, searchCards: payload.searchCards }
        case actionTypes.SEARCH_BY_QUERY_FAIL:
            return { ...state, loading: false, error: payload.error } 
        case actionTypes.REMOVE_SEARCH_RESULTS:
            return state
        default: 
            return state
    }
}