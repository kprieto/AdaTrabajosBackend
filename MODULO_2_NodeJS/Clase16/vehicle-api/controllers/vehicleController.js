const vehicleModel = require('../models/vehicleModel');
const responseView = require('../views/vehicleView');

const vehicleController = {
    getVehicle: () => {
        const vehicles = vehicleModel.readVehicles();
        return responseView.formatResponse(vehicles);
    },

    addVehicle: (newVehicle) =>{
        const vehicles = vehicleModel.readVehicles();
        vehicles.push(newVehicle);
        vehicleModel.writeVehicles(vehicles);
        return responseView.formatResponse({message: 'Vehículo añadido exitosamente.'});
    }
};

module.exports = vehicleController;