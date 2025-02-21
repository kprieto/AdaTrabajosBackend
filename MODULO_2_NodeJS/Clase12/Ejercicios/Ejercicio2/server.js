const net = require('net')


const HotelController = require('./controllers/hotelController')


const server = net.createServer((socket) =>{
    console.log('Cliente conectado');


    socket.on('data', (data) =>{
        const hotelId = data.toString().trim();
        console.log(`Solicitud recibida: ID ${hotelId}`);

        const response = HotelController.handleRequest(hotelId);

        socket.write(response);
        
    })

    socket.on('end', () =>{
        console.log('Cliente desconectado');
        
    })

    
})

server.listen(4001, () =>{
    console.log('Servidor escuchando en el puerto 4001');

})