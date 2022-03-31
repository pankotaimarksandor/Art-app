import React, { useState } from 'react'

import './SearchBar.scss'

const SearchBar = (props) => {
    const { onSearchHandler } = props
    const [query, setQuery] = useState('')

    return (
        <div className='search-bar'>
            <input
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder='Search..'
            />
            <div className='search-button' onClick={() => onSearchHandler(query)}>
                Search
            </div>
        </div>
    )
}

export default SearchBar