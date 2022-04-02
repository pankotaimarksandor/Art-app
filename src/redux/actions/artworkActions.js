import { actionTypes } from '../actionTypes'
import { artworkApi } from '../../apis/artworkApi'

export const fetchArtworksByPageAction = (page, limit) => (dispatch) => {

    dispatch({ type: actionTypes.FETCH_ARTWORKS_BY_PAGE_REQUEST })

    artworkApi
        .get(`?page=${page}&limit=${limit}`)
        .then(response => {
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
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: actionTypes.FETCH_ARTWORKS_BY_PAGE_FAIL,
                payload: { error: 'Failed to get artworks' }
            })
        })
}

export const fetchSelectedArtworkAction = (id) => (dispatch) => {

    dispatch({ type: actionTypes.FETCH_SELECTED_ARTWORK_REQUEST })

    artworkApi
        .get(`/${id}`)
        .then(response => {
            const artwork = response.data.data
        
            const artworkDetails = {
                image: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
                title: artwork.title,
                artist: artwork.artist_title,
                department: artwork.department_title
            }

            dispatch({
                type: actionTypes.FETCH_SELECTED_ARTWORK_SUCCESS,
                payload: { artworkDetails: artworkDetails }
            })
        })
        .catch(error => {
            console.log(error)
            dispatch({
                type: actionTypes.FETCH_SELECTED_ARTWORK_FAIL,
                payload: { error: 'Failed to get selected artwork' }
            })
        })
}

export const removeSelectedArtworkAction = () => {
    return { type: actionTypes.REMOVE_SELECTED_ARTWORK }
}