import { actionTypes } from '../actionTypes'

const initialState = {
    favoriteIds: [],
    favoriteCards: []
}

export const favoriteReducer = (state = initialState, { type, payload }) => {
    switch(type) {
        case actionTypes.ADD_FAVORITE:
            return { 
                ...state, 
                favoriteIds: [...state.favoriteIds, payload.id],
                favoriteCards: [...state.favoriteCards, payload.details]
            }
        case actionTypes.REMOVE_FAVORITE:
            console.log(payload)
            return { 
                ...state,
                favoriteIds: state.favoriteIds.filter((favid) => favid !== payload),
                favoriteCards: state.favoriteCards.filter((fav) => fav.id !== payload)
            }
        default: 
            return state
    }
}