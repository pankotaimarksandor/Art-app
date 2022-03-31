import React from 'react'
import { useSelector } from 'react-redux'
import ArtworkCard from './ArtworkCard'
import './FavoriteArtworks.scss'

const FavoriteArtworks = () => {
    const favoriteCards = useSelector((state) => state.favoriteReducer.favoriteCards)

    return (
        <div className='favoriteartworks'>
            <div className='artwork-list'>
                { favoriteCards.length < 1 && <h2>No favorites added yet!</h2> }
                { favoriteCards.length > 0 && (
                    favoriteCards.map((fav) => (
                        <ArtworkCard key={fav.id} data={fav}/>
                    ))
                )}
            </div>
        </div>
    )
}

export default FavoriteArtworks