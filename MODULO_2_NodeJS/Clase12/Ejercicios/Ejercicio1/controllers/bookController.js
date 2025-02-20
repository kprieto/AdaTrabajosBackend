const BookModel = require('../models/bookModel')

const BookView = require('../views/bookView')

const BookController = {
    handleRequest: (id) =>{
        const book = BookModel.getBookById(parseInt(id,10));
        return BookView.formatResponse(book);
    }
}

module.exports = BookController