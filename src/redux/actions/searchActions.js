import { actionTypes } from '../actionTypes'
import { artworkApi } from '../../apis/artworkApi'

export const searchByQueryAction = (query) => async (dispatch) => {
    const response = await artworkApi.get(`/search?q=${query}&fields=id,title,image_id`)

    if(response.status === 200) {
        const searchCards = []

        response.data.data.map((artwork) => {
            return searchCards.push({
                id: artwork.id, 
                title: artwork.title,
                thumb: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`
            })
        })
        
        dispatch({
            type: actionTypes.SEARCH_BY_QUERY,
            payload: searchCards
        })
    } else {
        console.log('Failed to fetch')
    }
}

export const removeSearchResultAction = () => {
    return {
        type: actionTypes.REMOVE_SEARCH_RESULTS
    }
}