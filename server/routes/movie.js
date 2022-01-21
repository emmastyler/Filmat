const express = require('express')
const movierouter = express.Router()

const {getMovie, getMovieById, deleteMovieById, updateMovieById, createMovie} = require('../controllers/moviecontroller')

const { verifyToken } = require('../middleware/verify')




movierouter.get('/movies', getMovie)
movierouter.get('/movies/:id', getMovieById)
movierouter.put('/movies/update/:id', updateMovieById)
movierouter.delete('/movies/delete', deleteMovieById)
movierouter.post('/movies/create', createMovie)





module.exports = movierouter