import { actionTypes } from '../actionTypes'
import { artworkApi } from '../../apis/artworkApi'

export const searchByQueryAction = (query) => (dispatch) => {
    
    dispatch({ type: actionTypes.SEARCH_BY_QUERY_REQUEST })

    artworkApi
        .get(`/search?q=${query}&fields=id,title,image_id`)
        .then(response => {
            const searchCards = []

            response.data.data.map((artwork) => {
                return searchCards.push({
                    id: artwork.id, 
                    title: artwork.title,
                    thumb: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`
                })
            })
            
            dispatch({
                type: actionTypes.SEARCH_BY_QUERY_SUCCESS,
                payload: { searchCards: searchCards }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: actionTypes.SEARCH_BY_QUERY_FAIL,
                payload: { error: 'No matches found with the given query'}
            })
        })
}

export const removeSearchResultAction = () => {
    return { type: actionTypes.REMOVE_SEARCH_RESULTS }
}