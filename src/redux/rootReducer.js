import { combineReducers } from 'redux'
import { artworkReducer, selectedArtworkReducer } from './reducers/artworkReducer'

const rootReducer = combineReducers({
    artworkReducer,
    selectedArtworkReducer
})

export default rootReducer
