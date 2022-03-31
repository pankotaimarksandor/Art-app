import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import noImage from '../images/noImage.jpg'
import { addFavoriteAction, removeFavoriteAction } from '../redux/actions/favoriteActions'
import LazyLoad from 'react-lazyload'
import SVG from './SVG'
import './ArtworkCard.scss'

const ArtworkCard = (props) => {
    const { data } = props
    const dispatch = useDispatch()
    const favorite = useSelector((state) => state.favoriteReducer.favoriteIds.some(id => id === data.id))
    const [isFavorite, setIsFavorite] = useState(false)

    const handleImageSrcOnError = (e) => {
        e.target.src = noImage
    }

    const handleFavoriteClick = (id) => {
        setIsFavorite(prev => !prev)
        if(!favorite) {
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
                        <LazyLoad height={500}>
                            <img src={data.thumb} alt={data.title} onError={handleImageSrcOnError}/>
                        </LazyLoad>
                    </Link>
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h4>{data.title}</h4>
                    </div>
                    <div className='favorite-icon' onClick={() => handleFavoriteClick(data.id)}>
                        {!favorite ? 'Add favorite' : 'Remove favorite'}
                        <SVG
                            name='STAR_ICON' 
                            className={favorite ? 'svg-icon favorite' : 'svg-icon'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtworkCard