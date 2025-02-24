const MovieModel = require('../models/movieModel')

const MovieView = require('../views/movieView')

const MovieController = {
    handleRequest: (movieTitle) =>{
        const movie = MovieModel.getMovieByTitle(movieTitle);
        return MovieView.formatResponse(movie);
    }
}

module.exports = MovieController