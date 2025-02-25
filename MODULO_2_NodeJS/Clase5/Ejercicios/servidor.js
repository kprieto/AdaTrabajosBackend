const net = require('net');

let clientesConectados = 0;
const server = net.createServer((socket) =>{
    // Ejercicio 1 y 2
    console.log("Cliente se ha conectado.");
    //Ejercicio extra
    clientesConectados++;
    console.log("Cliente conectados: ", clientesConectados);
    // Ejercicio 3
    socket.on('data',(data) => {
        
        console.log('Mensaje recibido del cliente: ', data.toString());

        
    })

    // Ejercicio 4
    socket.write("¡Hola Cliente! Tu mensaje ha sido recibido correctamente.")

    // Ejercicio 5
    socket.on('end', () =>
    {
        //Ejercicio extra
        clientesConectados--;
        console.log('El cliente se ha desconectado. Clientes conectados: ', clientesConectados);
            
    })
    
})
// Ejercicio 1
const PORT = 5000;

server.listen(PORT, () =>{
    console.log(`Servidor TCP escuchando en el puerto ${PORT}`);

})