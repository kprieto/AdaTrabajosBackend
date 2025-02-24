const net = require('net');

const server = net.createServer()

const path = require('path')

server.on('connection', (socket) =>{
    socket.on('data', (data) =>{
        const inputPath = data.toString().trim();

        const base = path.basename(inputPath);
        const directorio = path.dirname(inputPath);
        const extension = path.extname(inputPath);

        const respuesta = {
            base: base,
            directorio: directorio,
            extension: extension
        };

        socket.write(JSON.stringify(respuesta, null, 2));
    })


    socket.on('end', () =>{
        console.log('Cliente desconectado.');
            
    })

    socket.on('error', (err) =>{
        console.log(err.message);
            
    })
})

server.listen(8082, () =>{
    console.log('Servidor escuchando en el puerto', server.address().port);
    
})