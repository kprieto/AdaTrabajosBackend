const net = require('net');
let contadorClientes = 0;
const server = net.createServer((socket) =>{
    contadorClientes++;
    console.log("Cliente se ha conectado. Cliente conectados: ", contadorClientes);

    socket.on('data',(data) => {
        
        console.log('Mensaje recibido del cliente: ', data.toString());

        
    })

    
    socket.on('end', () =>
    {
        contadorClientes--;
        console.log('El cliente se ha desconectado. Clientes conectados: ', contadorClientes);
            
    })
    
})

const PORT = 5000;

server.listen(PORT, () =>{
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);

})