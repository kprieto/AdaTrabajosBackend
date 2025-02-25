const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectado al servidor');

    client.write('¡Hola, servidor!');
})

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
});


client.on('end', () => {
    console.log('Conexión cerrada');
});


client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
    client.destroy();
    console.log('Conexión destruida');
});