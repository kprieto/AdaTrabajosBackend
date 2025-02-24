const net = require('net')


const MovieController = require('./controllers/movieController')


const server = net.createServer((socket) =>{
    console.log('Cliente conectado');


    socket.on('data', (data) =>{
        const movieTitle = data.toString().trim();
        console.log(`Solicitud recibida: Titulo ${movieTitle}`);

        const response = MovieController.handleRequest(movieTitle);

        socket.write(response);
        
    })

    socket.on('end', () =>{
        console.log('Cliente desconectado');
        
    })

    
})

server.listen(4002, () =>{
    console.log('Servidor escuchando en el puerto 4002');

})