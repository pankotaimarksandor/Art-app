import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchArtworksByPageAction } from '../redux/actions/artworkActions'
import ArtworkCard from './ArtworkCard'
import Pagination from './Pagination'
import SearchBar from './SearchBar'
import { removeSearchResultAction } from '../redux/actions/searchActions'
import { searchByQueryAction } from './../redux/actions/searchActions'
import './ArtworkList.scss'

const ArtworkList = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [itemLimit, setItemLimit] = useState(25)
    const [pageCount, setPageCount] = useState(0)
    const artworkCards = useSelector((state) => state.artworkReducer.artworkCards)
    const searchCards = useSelector((state) => state.searchReducer.searchCards)
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

    const onSearchHandler = (query) => {
        dispatch(searchByQueryAction(query))
    }

    const closeSearchHandler = () => {
        dispatch(removeSearchResultAction())
    }

    return (
        <div className='artworklist'>
            <div className='pages-controller'>
                <Pagination pageCount={pageCount} handlePageChange={handlePageChange}/>
                <SearchBar onSearchHandler={onSearchHandler} />
                <div className='select'>
                    Items per page: 
                    <select value={itemLimit} onChange={(e) => setItemLimit(e.target.value)}>
                        <option value={25}>25</option>
                        <option value={50}>50</option>
                        <option value={75}>75</option>
                        <option value={100}>100</option>
                    </select>
                </div>
            </div>
            {searchCards && searchCards.length > 0 && (
                <>
                    <div className='title'>Search results <span onClick={closeSearchHandler}>Close</span></div>
                    <div className='artwork-list'>
                        { searchCards.map((art) => (
                            <ArtworkCard key={art.id} data={art}/>
                        ))}
                    </div>
                </>
            )}
            <div className='title'>All</div>
            <div className='artwork-list'>
                { artworkCards.length < 1 && <h2>Loading</h2> }
                { artworkCards.length > 0 && (
                    artworkCards.map((art) => (
                        <ArtworkCard key={art.id} data={art}/>
                    ))
                )}
            </div>
        </div>
    )
}

export default ArtworkList