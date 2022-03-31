import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworksByPageAction } from '../redux/actions/artworkActions'
import ArtworkCard from './ArtworkCard'
import './ArtworkList.scss'
import Pagination from './Pagination'

const ArtworkList = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [itemLimit, setItemLimit] = useState(3)
    const [pageCount, setPageCount] = useState(0)
    const artworkCards = useSelector((state) => state.artworkReducer.artworkCards)
    const totalItems = useSelector((state) => state.artworkReducer.totalItems)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchArtworksByPageAction(currentPage, itemLimit))
    }, [dispatch, currentPage, itemLimit])

    useEffect(() => {
        setPageCount(Math.ceil(totalItems / itemLimit))
    }, [totalItems, itemLimit])

    const handlePageChange = (data) => {
        setCurrentPage(data.selected + 1)
    }

    return (
        <div className='artworklist'>
            <div className='pages'>
                <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>
                <div className='select-items-per-page'>
                    Items per page: 
                    <select value={itemLimit} onChange={(e) => setItemLimit(e.target.value)}>
                        <option value={3}>25</option>
                        <option value={4}>50</option>
                        <option value={5}>75</option>
                        <option value={6}>100</option>
                    </select>
                </div>
            </div>
            <div className='artwork-list'>
                { artworkCards.length < 1 && <h2>Loading</h2> }
                { artworkCards.length > 0 && (
                    artworkCards.map((art, i) => (
                        <ArtworkCard key={i} data={art}/>
                    ))
                )}
            </div>
        </div>
    )
}

export default ArtworkList