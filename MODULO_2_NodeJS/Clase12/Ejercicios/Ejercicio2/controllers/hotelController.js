const HotelModel = require('../models/hotelModel')

const HotelView = require('../views/hotelView')

const HotelController = {
    handleRequest: (id) =>{
        const hotel = HotelModel.getHotelById(parseInt(id,10));
        return HotelView.formatResponse(hotel);
    }
}

module.exports = HotelController