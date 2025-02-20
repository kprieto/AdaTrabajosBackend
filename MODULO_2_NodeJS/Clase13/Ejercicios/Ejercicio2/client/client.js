const net = require('net');


const client = net.createConnection({ port: 8080 }, () => {
    console.log('Conectado al servidor');
    client.write('Hola, servidor');
});


client.on('data', (data) => {

    const res = JSON.parse(data);

    console.log('UUID recibido del servidor:', res.uuid);


    client.end();
});


client.on('end', () => {
    console.log('Servidor cerró la conexión');
});


client.on('error', (err) => {
    console.log('Error en la conexión:', err.message);
});