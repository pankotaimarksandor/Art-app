import { combineReducers } from 'redux'
import { artworkReducer, selectedArtworkReducer } from './reducers/artworkReducer'
import { favoriteReducer } from './reducers/favoriteReducer'
import { searchReducer } from './reducers/searchReducer'

const rootReducer = combineReducers({
    artworkReducer,
    selectedArtworkReducer,
    favoriteReducer,
    searchReducer
})

export default rootReducer
