const Movie = require('../models/movies')



const getMovie = async(req, res) =>{
    
    try {
        const movies = await Movie.find({})
        if(movies){
            return res.status(200).json(movies)
        }
    } catch (error) {
        console.log(error)
    }
}

const getMovieById = async(req, res) =>{
    
    try {
        const movies = await Movie.findById(req.params.id)
        if(movies){
            return res.status(200).json(movies)
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteMovieById = async(req, res) =>{
    
    try {
        const movies = await Movie.deleteOne({name: req.query.name})
        if(movies){
            return res.status(200).json({
                message:'List deleted'
            })
        }
        console.log(req.query.name)
    } catch (error) {
        console.log(req.query)
    }
}

const updateMovieById = async(req, res) =>{
    
    try {
        const newMovies = {
            name:req.body.name,
            description:req.body.description,
            rating:req.body.rating,
            isMovie:req.body.isMovie,
            isSeries:req.body.isSeries,
            year:req.body.year,
            duration:req.body.duration,
            imgSrc:req.body.imgSrc,
            videoSrc:req.body.videoSrc
           }
    
        const movies = await Movie.findByIdAndUpdate(req.params.id, newMovies, {new: true})
        if(movies){
            return res.status(200).json(movies)
        }
        else {

        }
    } catch (error) {
        console.log(error)
    }
}

const createMovie = async(req, res) =>{
    

    try {
       const movies = new Movie({
        name:req.body.name,
        description:req.body.description,
        rating:req.body.rating,
        isMovie:req.body.isMovie,
        isSeries:req.body.isSeries,
        year:req.body.year,
        duration:req.body.duration,
        imgSrc:req.body.imgSrc,
        videoSrc:req.body.videoSrc
       })

      const movie_name = await Movie.findOne({name: req.body.name})

      const nameMovie = movie_name?.name
   
        if(!nameMovie){

            const createdMovie = await movies.save()
            return res.status(200).json(createdMovie)
        }
        else {
            res.status(400).json({
                message: 'List already exists'
            })
        }
        } catch (error) {
            console.log(error)
        }
}

module.exports = {getMovie,getMovieById, deleteMovieById, updateMovieById, createMovie}