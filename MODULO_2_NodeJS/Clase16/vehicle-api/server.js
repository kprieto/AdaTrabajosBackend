const net = require('net');
const vehicleController = require('./controllers/vehicleController');
const {v4: uuidv4} = require('uuid');

function isJson(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
}

const server = net.createServer((socket) => {
    console.log('Cliente conectado.');

    socket.on('data', (data) => {
        const command = data.toString().trim();

        
        if (command === 'GET VEHICLES') {
            const response = vehicleController.getVehicle();
            socket.write(response);
        } else if (command.startsWith('ADD VEHICLE')) {
            const match = command.match(/\{.*\}/); 

            if (match) {
                const vehicleDataString = match[0]; 

                try {
                    const vehicleData = JSON.parse(vehicleDataString);
                    console.log('JSON recibido:', vehicleData); 

                    if (vehicleData && typeof vehicleData === 'object') {
                        const newVehicle = { id: uuidv4(), ...vehicleData };
                        const response = vehicleController.addVehicle(newVehicle);
                        socket.write(response);
                    } else {
                        socket.write('Error: Datos de vehículo inválidos.');
                    }
                } catch (error) {
                    console.error('Error al procesar JSON:', error.message);
                    socket.write('Error: No se pudo procesar el JSON.');
                }
            } else {
                socket.write('Error: No se encontró un JSON válido en el comando.');
            }
        } else {
            socket.write('Comando no válido.');
        }
    });
    socket.on('end', () =>{
        console.log('Cliente desconectado.');
        
    })
});

server.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto 8080');
    
})
