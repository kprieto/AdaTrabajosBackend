/*Ejercicio 10: Servidor con Historial de Mensajes 
Consigna: 
Crea un servidor TCP que almacene un historial de los últimos 10 
mensajes enviados por los clientes. Cuando un nuevo cliente se conecte, 
el servidor debe enviarle el historial de mensajes. Los mensajes deben 
almacenarse en memoria y actualizarse cada vez que un cliente envía un 
nuevo mensaje. 
Requisitos: 
• Usa un array para almacenar el historial de mensajes. 
• Usa el evento data para recibir mensajes y actualizar el historial. 
• Usa el método socket.write() para enviar el historial al cliente 
cuando se conecta. 
• Limita el historial a los últimos 10 mensajes. */

const net = require('net');

let historialMensajes = [];

const server = net.createServer((socket) =>{
    console.log('¡Un cliente se ha conectado!');
    if (historialMensajes.length > 0) {
        socket.write('Historial de mensajes:\n');
        historialMensajes.forEach((mensaje) => {
            socket.write(mensaje + '\n');
        });
    } else {
        socket.write('No hay mensajes en el historial.\n');
    }

    socket.on('data', (data) =>{
        console.log(`Datos recibidos del cliente ${data.toString()}`);
        const mensaje = data.toString().trim();

        historialMensajes.push(mensaje);
        if (historialMensajes.length > 10) {
            historialMensajes.shift(); 
        }
        
        server.getConnections((err, count) => {
            if (err) {
                console.error('Error al obtener las conexiones:', err.message);
                return;
            }
            socket.write(`Mensaje recibido: ${mensaje} (Clientes conectados: ${count})\n`);
        });

        console.log(`Mensaje recibido: ${mensaje}`);
    })

    socket.on('close', () =>{
        console.log(`Un cliente se ha desconectado.`);
    })

    socket.on('error', (err) =>{
        console.error(`Error en la conexion con el cliente: ${err.message}`);
        socket.destroy();
    })
    
})

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando desde el puerto ${PORT}`);
    
})