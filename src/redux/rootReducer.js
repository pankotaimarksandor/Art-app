import { combineReducers } from 'redux'
import { artworkReducer, selectedArtworkReducer } from './reducers/artworkReducer'
import { favoriteReducer } from './reducers/favoriteReducer'

const rootReducer = combineReducers({
    artworkReducer,
    selectedArtworkReducer,
    favoriteReducer
})

export default rootReducer
