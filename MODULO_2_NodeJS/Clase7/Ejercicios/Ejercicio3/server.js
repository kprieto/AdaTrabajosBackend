/*Ejercicio 3: Servidor de Mensajes Personalizados 
Consigna: 
Crea un servidor TCP que permita a los clientes enviar mensajes. El 
servidor debe responder con un mensaje personalizado dependiendo 
del contenido del mensaje recibido: 
• Si el cliente envía "Hola", el servidor debe responder 
"¡Bienvenido!". 
• Si el cliente envía "Adiós", el servidor debe responder "¡Hasta 
luego!" y cerrar la conexión. 
• Para cualquier otro mensaje, el servidor debe responder "Mensaje 
recibido: [mensaje del cliente]". 
Requisitos: 
• Usa el evento data para recibir y procesar los mensajes del cliente. 
• Usa el método socket.write() para enviar respuestas personalizadas. 
• Usa el método socket.end() para cerrar la conexión cuando el 
cliente envíe "Adiós". */
const net = require('net');

// Crear el servidor
const server = net.createServer((socket) => {
    console.log('¡Un cliente se ha conectado!');

    
    socket.on('data', (data) => {

        let mensaje = data.toString().trim();

        console.log('Mensaje recibido del cliente: ' + mensaje);


        if (mensaje === 'Hola') {
            socket.write('¡Bienvenido!');
        } else if (mensaje === 'Adiós') {
            socket.write('¡Hasta luego!');
            socket.end(); 
        } else {
            socket.write(`Mensaje recibido del cliente: ${mensaje}`);
        }
    });


    socket.on('end', () => {
        console.log('El cliente se ha desconectado.');
    });
});

const PORT = 3000;
server.listen(PORT, () =>{
    console.log(`El servidor esta escuchando desde el puerto ${PORT}`);
    
})