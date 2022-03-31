import React from 'react'
import { Link } from 'react-router-dom'
import noImage from '../images/noImage.jpg'
import './ArtworkCard.scss'

const ArtworkCard = (props) => {
    const { data } = props

    const handleImageSrc = (e) => {
        e.target.src = noImage
    }

    return (
        <div className='artworkcard'>
            <div className="card-inner">
                <div className="card-top">
                    <Link to={`/arts/${data.id}`}>
                        <img src={data.thumb} alt={data.title} onError={handleImageSrc}/>
                    </Link>
                </div>
                <div className="card-bottom">
                    <div className="card-info">
                        <h3>{data.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtworkCard