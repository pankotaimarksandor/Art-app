import { actionTypes } from '../actionTypes'

const initialState = {
    searchCards: [],
}

export const searchReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case actionTypes.SEARCH_BY_QUERY:
            return { 
                ...state, 
                searchCards: payload
            }
        case actionTypes.REMOVE_SEARCH_RESULTS:
            return []
        default: 
            return state
    }
}