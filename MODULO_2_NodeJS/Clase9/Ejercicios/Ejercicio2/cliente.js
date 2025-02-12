/*DESAFÍO 2: Cliente con Pausa y Reanudación de Datos       
Objetivo: Simular un cliente que pausa la recepción de datos por 5 
segundos y luego la reanuda. 
El cliente debe: 
Conectarse al servidor y enviar un mensaje inicial. 
Escuchar el evento 'data' y mostrar los datos en consola. 
Pausar la recepción de datos usando client.pause() a los 3 segundos. 
Reanudar la recepción de datos con client.resume() a los 8 segundos. 
Finalizar la conexión tras 15 segundos. */
const net = require('net');

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () =>{
    console.log('Conectado al servidor');
    client.write('Hola servidor!');
})


client.on('data', (data) => {
    console.log('Datos recibidos del servidor:', data.toString());
});


setTimeout(() => {
    console.log('Pausando la recepción de datos por 5 segundos...');
    client.pause();
}, 3000);


setTimeout(() => {
    console.log('Reanudando la recepción de datos...');
    client.resume();
}, 8000);


setTimeout(() => {
    console.log('Finalizando la conexión...');
    client.end();
}, 15000);


client.on('end', () => {
    console.log('Servidor cerró la conexión');
});


client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
}); 
