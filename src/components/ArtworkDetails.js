import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSelectedArtworkAction, removeSelectedArtworkAction } from '../redux/actions/artworkActions'
import noImage from '../images/noImage.jpg'
import './ArtworkDetails.scss'

const ArtworkDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const artworkDetails = useSelector((state) => state.selectedArtworkReducer.artworkDetails)
    const loading = useSelector((state) => state.selectedArtworkReducer.loading)
    const error = useSelector((state) => state.selectedArtworkReducer.error)

    useEffect(() => {
        console.log(id)
        dispatch(fetchSelectedArtworkAction(id))

        return () => {
            dispatch(removeSelectedArtworkAction())
        }
    }, [id, dispatch])

    const handleImageSrcOnError = (e) => {
        e.target.src = noImage
    }

    return (
        <div className='artworkdetails'>
            {loading && <h2>Loading..</h2>}
            {!loading && error && <h2>{error}</h2>}
            {!loading && !error && Object.keys(artworkDetails).length > 0 && (
                <>
                    <div className="section-left">
                        <div className="artwork-info">
                            <div>
                                <span>Artist:</span>
                                <span>{artworkDetails.artist}</span>
                            </div>
                            <div>
                                <span>Title:</span>
                                <span>{artworkDetails.title}</span>
                            </div>
                            <div>
                                <span>Department:</span>
                                <span>{artworkDetails.department}</span>
                            </div>
                        </div>
                    </div>
                <div className="section-right">
                    <img src={artworkDetails.image} alt={artworkDetails.author} onError={handleImageSrcOnError}/>
                </div>
              </>
            )}
            { !loading && !error && Object.keys(artworkDetails).length < 1 && <h2>No details found</h2> }
        </div>
    )
}

export default ArtworkDetails