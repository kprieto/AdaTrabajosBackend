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

const descifrar = (textoCifrado) => {
    const descifrador = crypto.createDecipheriv(algoritmo, key, iv);
    let textoDescifrado = descifrador.update(textoCifrado, 'hex', 'utf8');
    textoDescifrado += descifrador.final('utf8');
    return textoDescifrado;
};

const server = net.createServer((socket) => {
    socket.write('Bienvenido al chat!\n');

    socket.on('data', (data) => {
        const mensaje = descifrar(data.toString().trim());
        socket.write('Mensaje recibido: ' + mensaje + '\n');
    });
});

server.listen(8080, () => {
    console.log('Servidor de chat escuchando en el puerto 8080');
});

const mensaje = 'Hola Mundo Programadoras';
const mensajeCifrado = cifrar(mensaje);
console.log('Mensaje cifrado:', mensajeCifrado);

const mensajeDescifrado = descifrar(mensajeCifrado);
console.log('Mensaje descifrado:', mensajeDescifrado);