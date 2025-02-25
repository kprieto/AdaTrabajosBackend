/*Ejercicio 6: Servidor de Comandos 
Consigna: 
Crea un servidor TCP que permita a los clientes enviar comandos 
simples. Dependiendo del comando recibido, el servidor debe realizar 
una acción específica: 
• Si el cliente envía "fecha", el servidor debe responder con la fecha y 
hora actual. 
• Si el cliente envía "ip", el servidor debe responder con la dirección 
IP del cliente. 
• Si el cliente envía "salir", el servidor debe cerrar la conexión. 
• Para cualquier otro comando, el servidor debe responder 
"Comando no reconocido". 
Requisitos: 
• Usa el evento data para recibir y procesar los comandos. 
• Usa el método socket.write() para enviar respuestas. 
• Usa el método socket.end() para cerrar la conexión cuando el 
cliente envíe "salir". */

const net = require('net');

const server = net.createServer((socket) =>{
    console.log('¡Un cliente se ha conectado!');

    socket.on('data', (data) =>{
        console.log(`Datos recibidos del cliente ${data.toString()}`);
        const comando = data.toString().trim();

        switch (comando) {
            case 'fecha':
                socket.write(`Fecha y hora actual: ${new Date().toString()}\n`);
                break;
            case 'ip':
                socket.write(`Dirección IP del cliente: ${socket.remoteAddress}\n`);
                break;
            case 'salir':
                socket.write('Cerrando la conexión...\n');
                socket.end();
                break;
            default:
                socket.write('Comando no reconocido\n');
                break;
        }
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