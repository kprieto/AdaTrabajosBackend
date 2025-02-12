const net = require('net');

const server = net.createServer()

const path = require('path')

server.on('connection', (socket) =>{
    socket.on('data', (data) =>{
        const inputPath = data.toString().trim();
        const isAbsolute = path.isAbsolute(inputPath);
        const response = isAbsolute?'La ruta es absoluta' : 'La ruta es relativa';
        socket.write(response);
    })


    socket.on('end', () =>{
        console.log('Cliente desconectado.');
            
    })

    socket.on('error', (err) =>{
        console.log(err.message);
            
    })
})

server.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto', server.address().port);
    
})