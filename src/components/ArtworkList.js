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
    const [isSearching, setIsSearching] = useState(false)
    const artworkCards = useSelector((state) => state.artworkReducer.artworkCards)
    const artworksLoading = useSelector((state) => state.artworkReducer.loading)
    const artworksError = useSelector((state) => state.artworkReducer.error)
    const searchCards = useSelector((state) => state.searchReducer.searchCards)
    const searchLoading = useSelector((state) => state.searchReducer.loading)
    const searchError = useSelector((state) => state.searchReducer.error)
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
        setIsSearching(true)
        dispatch(searchByQueryAction(query))
    }

    const closeSearchHandler = () => {
        setIsSearching(false)
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
            { isSearching && searchLoading && <h2>Searching..</h2> }
            { isSearching && !searchLoading && searchError && <h2>{searchError}</h2> }
            { isSearching && !searchLoading && !searchError && searchCards.length > 0 && (
                <>
                    <div className='title'>Search results <span onClick={closeSearchHandler}>Close</span></div>
                    <div className='artwork-list'>
                        { searchCards.map((art) => (
                            <ArtworkCard key={art.id} data={art}/>
                        ))}
                    </div>
                </>
            )}
            { isSearching && !searchLoading && !searchError && searchCards.length < 1 && (
                <>
                    <div className='title'>No matches found<span onClick={closeSearchHandler}>Close</span></div>
                </>
            )}
            <div className='title'>All</div>
            <div className='artwork-list'>
                { artworksLoading && <h2>Loading..</h2> }
                { !artworksLoading && artworksError && <h2>{artworksError}</h2> }
                { !artworksLoading && !artworksError && artworkCards.length > 0 && (
                    artworkCards.map((art) => (
                        <ArtworkCard key={art.id} data={art}/>
                    ))
                )}
                { !artworksLoading && !artworksError && artworkCards.length < 1 && <h2>No artworks found</h2> }
            </div>
        </div>
    )
}

export default ArtworkList