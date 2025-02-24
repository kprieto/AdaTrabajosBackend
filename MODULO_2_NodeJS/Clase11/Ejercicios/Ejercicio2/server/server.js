const net = require('net');

const server = net.createServer()

const path = require('path')

server.on('connection', (socket) =>{
    socket.on('data', (data) =>{
        const inputPath = data.toString().trim();
        const isNormalize = path.normalize(inputPath);
        const response = isNormalize?'La ruta esta normalizada' : 'La ruta es relativa/absoluta';
        socket.write(response);
    })


    socket.on('end', () =>{
        console.log('Cliente desconectado.');
            
    })

    socket.on('error', (err) =>{
        console.log(err.message);
            
    })
})

server.listen(8081, () =>{
    console.log('Servidor escuchando en el puerto', server.address().port);
    
})