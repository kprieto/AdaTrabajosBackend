const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectado al servidor');

    client.write('¡Hola, servidor!');

    console.log('Llamando a client.unref() para permitir que Node.js termine si no hay otras tareas');
    client.unref();
    
    setTimeout(() => {
        console.log('Llamando a client.ref() para evitar que el proceso termine');
        client.ref();
    }, 5000);
})

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
});


client.on('end', () => {
    console.log('Conexión cerrada');
});


client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
});