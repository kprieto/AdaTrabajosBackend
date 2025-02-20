const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../models/books.json');

const BookModel = {
    getBookById: (id) =>{
        try{
            const data = fs.readFileSync(filePath, 'utf8')
            const books = JSON.parse(data);
            return books.find(book => book.id === id ) || null;
        } catch (error){
            console.error('Error al leer el archivo Json: ', error);
            return null
        }
    }
}


module.exports = BookModel
