const net = require('net');
const crypto = require('crypto');


const key = crypto.randomBytes(32);
const algoritmo = 'aes-256-cbc';
const iv = crypto.randomBytes(16);



const cifrar = (texto) => {
    const cifrador = crypto.createCipheriv(algoritmo, key, iv);
    let textoCifrado = cifrador.update(texto, 'utf8', 'hex');
    textoCifrado += cifrador.final('hex');
    return textoCifrado;
};

const client = net.createConnection({ port: 8080 }, () => {
    console.log('Conectado al servidor de chat!');

});

client.on('data', (data) => {
    console.log('Mensaje del servidor:', data.toString());
});

client.on('end', () => {
    console.log('Desconectado del servidor de chat');
});

client.on('error', (err) =>{
    console.log('Error en la conexion: ', err.message);
    
})