import { actionTypes } from '../actionTypes'
import { artworkApi } from '../../apis/artworkApi'

export const fetchArtworksByPageAction = (page, limit) => async (dispatch) => {
    const response = await artworkApi.get(`?page=${page}&limit=${limit}`)

    if(response.status === 200) {
        const artworkCards = []

        response.data.data.map((artwork) => {
            return artworkCards.push({
                id: artwork.id, 
                title: artwork.title,
                thumb: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/200,/0/default.jpg`
            })
        })

        dispatch({
            type: actionTypes.FETCH_ARTWORKS_BY_PAGE_SUCCESS,
            payload: { artworkCards: artworkCards, totalItems: response.data.pagination.total}
        })
    } else {
        dispatch({
            type: actionTypes.FETCH_ARTWORKS_BY_PAGE_FAIL,
            payload: response.data
        })
    }
}

export const fetchSelectedArtworkAction = (id) => async (dispatch) => {
    const response = await artworkApi.get(`/${id}`)
    
    if(response.status === 200) {
        const artwork = response.data.data
        
        const artworkDetails = {
            image: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
            title: artwork.title,
            artist: artwork.artist_title,
            department: artwork.department_title
        }

        dispatch({
            type: actionTypes.FETCH_SELECTED_ARTWORK,
            payload: artworkDetails
        })
    }
}

export const removeSelectedArtworkAction = () => {
    return { type: actionTypes.REMOVE_SELECTED_ARTWORK }
}