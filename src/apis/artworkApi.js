import axios from 'axios'

export const artworkApi = axios.create({
    baseURL: 'https://api.artic.edu/api/v1/artworks'
})