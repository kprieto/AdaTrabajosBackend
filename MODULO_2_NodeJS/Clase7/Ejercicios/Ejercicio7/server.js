/*Ejercicio 7: Servidor de Chat Grupal 
Consigna: 
Crea un servidor TCP que permita a múltiples clientes conectarse y enviar 
mensajes. Cada mensaje enviado por un cliente debe ser retransmitido a 
todos los demás clientes conectados. El servidor debe notificar cuando 
un cliente se conecta o desconecta. 
Requisitos: 
• Usa un array para almacenar las conexiones de los clientes. 
• Usa el evento data para recibir mensajes y retransmitirlos a todos 
los clientes. 
• Usa el evento end para eliminar a un cliente del array cuando se 
desconecta. 
• Notifica a los demás clientes cuando alguien se conecta o 
desconecta. */
const net = require('net');

let clientes = [];

const server = net.createServer((socket) =>{
    console.log('¡Un cliente se ha conectado!');
    clientes.push(socket);
    clientes.forEach(cliente => {
        if (cliente !== socket) {
            cliente.write('Un nuevo cliente se ha conectado.\n');
        }
    });

    socket.on('data', (data) =>{
        
        const mensaje = data.toString().trim();
        console.log(`Datos recibidos del cliente ${mensaje}`);
        
        clientes.forEach(cliente => {
            if (cliente !== socket) {
                cliente.write(`Mensaje de un cliente: ${mensaje}\n`);
            }
        });
    })

    socket.on('close', () =>{
        console.log(`Un cliente se ha desconectado.`);
    })

    socket.on('end', () => {
        console.log('Un cliente se ha desconectado.');
        clientes = clientes.filter(cliente => cliente !== socket);
        
        clientes.forEach(cliente => {
            cliente.write('Un cliente se ha desconectado.\n');
        });
    });

    socket.on('error', (err) =>{
        console.error(`Error en la conexion con el cliente: ${err.message}`);
        socket.destroy();
    })
    
})

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando desde el puerto ${PORT}`);
    
})