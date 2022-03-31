import React from 'react'
import { Link } from 'react-router-dom'
import './PageNotFound.scss'

const PageNotFound = () => {
    return (
        <div className='pagenotfound'>
            <div className='message'>
                Page not found!
            </div>
            <Link to='/'>Go back to home</Link>
        </div>
    )
}

export default PageNotFound