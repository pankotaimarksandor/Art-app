import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-title'>Art Institute of Chicago</div>
            <div className='links'>
                <NavLink to='/'>Artworks</NavLink>
                <NavLink to='/favorites'>Favorites</NavLink>
            </div>
        </div>
    )
}

export default Header