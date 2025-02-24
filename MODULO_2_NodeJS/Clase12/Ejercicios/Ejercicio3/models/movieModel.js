const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../models/movies.json');

const MovieModel = {
    getMovieByTitle: (titulo) =>{
        try{
            const data = fs.readFileSync(filePath, 'utf8')
            const movies = JSON.parse(data);
            return movies.find(movie => movie.titulo.toLowerCase() === titulo.toLowerCase() ) || null;
        } catch (error){
            console.error('Error al leer el archivo Json: ', error);
            return null
        }
    }
}


module.exports = MovieModel