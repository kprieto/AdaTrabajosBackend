const net = require('net');

const server = net.createServer((socket) =>{
    // Ejercicio 1 y 2
    console.log("Cliente se ha conectado.");
    // Ejercicio 3
    socket.on('data',(data) => {
        
        console.log('Mensaje recibido del cliente: ', data.toString());

        
    })

    // Ejercicio 4
    socket.write("¡Hola Cliente! Tu mensaje ha sido recibido correctamente.")

    // Ejercicio 5
    socket.on('end', () =>
    {
        console.log('El cliente se ha desconectado.');
            
    })
    
})
// Ejercicio 1
const PORT = 5000;

server.listen(PORT, () =>{
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);

})