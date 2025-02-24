/*DESAFÍO 4: Cliente con Mensajes Temporizados y Cierre Programado 
objetivo: Enviar mensajes cada 5 segundos y cerrar la conexión tras 
20 segundos. 
El cliente debe: 
Conectarse y enviar un mensaje inicial. 
Enviar un mensaje "Mensaje automático" cada 5 segundos. 
Escuchar el evento 'data' y mostrar los datos recibidos. 
Cerrar la conexión con client.end() tras 20 segundos.*/ 
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () =>{
    console.log('Conectado al servidor');
    client.write('Hola servidor!');
})

const intervalId = setInterval(() => {
    console.log('Enviando mensaje automático');
    client.write('Mensaje automático');
}, 5000);

client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
});

setTimeout(() => {
    console.log('Cerrando la conexión tras 20 segundos');
    clearInterval(intervalId); 
    client.end();
}, 20000);

client.on('end', () => {
    console.log('Servidor cerró la conexión');
});

client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);

});