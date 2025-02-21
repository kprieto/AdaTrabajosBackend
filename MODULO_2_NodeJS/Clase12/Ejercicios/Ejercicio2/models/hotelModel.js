const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../models/hoteles.json');

const HotelModel = {
    getHotelById: (id) =>{
        try{
            const data = fs.readFileSync(filePath, 'utf8')
            const hotels = JSON.parse(data);
            return hotels.find(hotel => hotel.id === id ) || null;
        } catch (error){
            console.error('Error al leer el archivo Json: ', error);
            return null
        }
    }
}


module.exports = HotelModel