const net = require('net');

const server = net.createServer()

server.on('connection', (socket) =>{
    socket.on('data', (data) =>{
        console.log('\nEl cliente '+ socket.remoteAddress + socket.remotePort + "dice: " + data);
        socket.write('Mensaje recibido!');
    })


    socket.on('close', () =>{
        console.log('Comunicacion finalizada.');
            
    })

    socket.on('error', (err) =>{
        console.log(err.message);
            
    })
})

server.listen(5000, () =>{
    console.log('Servidor escuchando en el puerto', server.address().port);
    
})