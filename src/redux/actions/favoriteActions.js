import { actionTypes } from '../actionTypes'

export const addFavoriteAction = (id, details) => {
    return {
        type: actionTypes.ADD_FAVORITE,
        payload: { id: id, details: details }
    }
}

export const removeFavoriteAction = (id) => {
    return {
        type: actionTypes.REMOVE_FAVORITE,
        payload: id
    }
}