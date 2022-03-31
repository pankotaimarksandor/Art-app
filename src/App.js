import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ArtworkDetails from './components/ArtworkDetails'
import ArtworkList from './components/ArtworkList'
import FavoriteArtworks from './components/FavoriteArtworks'
import Header from './components/Header'
import PageNotFound from './components/PageNotFound'
import './scss/styles.scss'

const App = () => {
    return (
        <div className='app'>
            <Router>
                <Header />
                <Routes>
                    <Route index exact element={ <ArtworkList /> }/>
                    <Route path='/favorites' element={ <FavoriteArtworks /> }/>
                    <Route path='/arts/:id' element={ <ArtworkDetails /> }/>
                    <Route path='*' element={ <PageNotFound /> }/>
                </Routes>
            </Router>
        </div>
    )
}

export default App