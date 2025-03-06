const net = require('net');
const crypto = require('crypto');


const clave = 'mi_clave_secreta_1234';
const algoritmo = 'aes-256-cbc';
const iv = crypto.randomBytes(16);



const cifrar = (texto) => {
    const cifrador = crypto.createCipheriv(algoritmo, clave, iv);
    let textoCifrado = cifrador.update(texto, 'utf8', 'hex');
    textoCifrado += cifrador.final('hex');
    return textoCifrado;
};

const client = net.createConnection({ port: 8080 }, () => {
    console.log('Conectado al servidor de chat! Por favor, autentíquese.');
    process.stdin.on('data', (data) => {
        const mensajeCifrado = cifrar(data.toString().trim());
        client.write(mensajeCifrado);
    });
    
    process.stdin.on('data', (data) => {
        const mensajeCifrado = cifrar(data.toString().trim());
        client.write(mensajeCifrado);
    });
});

client.on('data', (data) => {
    console.log('Mensaje del servidor:', data.toString());
});

client.on('end', () => {
    console.log('Desconectado del servidor de chat');
});