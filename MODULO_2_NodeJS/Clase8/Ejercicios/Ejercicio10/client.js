const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectado al servidor');

    client.write('¡Hola, servidor!');
})



let timeout = setTimeout(() => {
    console.log('No hay datos del servidor en 10 segundos, cerrando conexión');
    client.end();
}, 10000);

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        console.log('No hay datos del servidor en 10 segundos, cerrando conexión');
        client.end();
    }, 10000);
});


client.on('end', () => {
    console.log('Conexión cerrada');
});


client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
});