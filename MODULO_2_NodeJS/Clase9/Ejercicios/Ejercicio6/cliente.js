const net = require('net');

let intentosFallidos = 0;
const maxIntentos = 5;
const intervaloReintento = 2000; 

const client = net.createConnection({ port: 9090 }, () => {
    intentosFallidos = 0;
    console.log('Conectado al servidor');
    client.write('Hola, servidor!');
});


client.on('data', (data) => {
    console.log('Respuesta del servidor:', data.toString());
});

client.on('end', () => {
    console.log('Servidor cerró la conexión');
});

client.on('close', () => {
    console.log('Conexión cerrada');
    if (intentosFallidos < maxIntentos) {
        intentosFallidos++;
        console.log(`Reintentando conectar en ${intervaloReintento / 1000} segundos... (Intento ${intentosFallidos})`);
        setTimeout(() => {

        },intervaloReintento);
    } else {
        console.error('Máximo de intentos fallidos alcanzado. Terminando el proceso.');
        process.exit(1);
    }
});

client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
});


