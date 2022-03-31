import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import noImage from '../images/noImage.jpg'
import { addFavoriteAction, removeFavoriteAction } from '../redux/actions/favoriteActions'
import './ArtworkCard.scss'

const ArtworkCard = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const favorite = useSelector((state) => state.favoriteReducer.favoriteIds.some(id => id === data.id))
    const [isFavorite, setIsFavorite] = useState(false)

    useEffect(() => {
        setIsFavorite(favorite)
    }, [favorite, data])

    const handleImageSrcOnError = (e) => {
        e.target.src = noImage
    }

    const handleFavoriteClick = (id) => {
        setIsFavorite(prev => !prev)
        if(!isFavorite) {
            dispatch(addFavoriteAction(id, data))
        } else {
            dispatch(removeFavoriteAction(id))
        }
    }

    return (
        <div className='artworkcard'>
            <div className="card-inner">
                <div className="card-top">
                    <Link to={`/arts/${data.id}`}>
                        <img src={data.thumb} alt={data.title} onError={handleImageSrcOnError}/>
                    </Link>
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h3>{data.title}</h3>
                    </div>
                    <button onClick={() => handleFavoriteClick(data.id)}>
                        {!isFavorite ? 'Add favorite' : 'Remove favorite'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ArtworkCard