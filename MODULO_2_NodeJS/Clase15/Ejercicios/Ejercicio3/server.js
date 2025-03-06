const net = require('net');
const crypto = require('crypto');


const clave = 'mi_clave_secreta_1234';
const algoritmo = 'aes-256-cbc1';
const iv = crypto.randomBytes(16);


const cifrar = (texto) => {
    const cifrador = crypto.createCipheriv(algoritmo, clave, iv);
    let textoCifrado = cifrador.update(texto, 'utf8', 'hex');
    textoCifrado += cifrador.final('hex');
    return textoCifrado;
};

const descifrar = (textoCifrado) => {
    const descifrador = crypto.createDecipheriv(algoritmo, clave, iv);
    let textoDescifrado = descifrador.update(textoCifrado, 'hex', 'utf8');
    textoDescifrado += descifrador.final('utf8');
    return textoDescifrado;
};

const usuarios = [{ usuario: 'usuario1', contrasena: 'contrasena1' }];

const server = net.createServer((socket) => {
    socket.write('Bienvenido al chat! Por favor, autentíquese.\n');
    socket.write('Ingrese la clave de acceso:\n');
    socket.authenticated = false;

    socket.on('data', (data) => {
        const mensaje = descifrar(data.toString().trim());
        if (!socket.authenticated) {
        const [usuario, contrasena] = mensaje.split(',');
        const usuarioValido = usuarios.find(
            (u) => u.contrasena === contrasena
        );
            if (usuarioValido) {
                socket.authenticated = true;
                socket.write('Autenticación exitosa! Ahora puedes enviar mensajes.\n');
            } else {
                socket.write('Autenticación fallida! Inténtalo de nuevo.\n');
            }
        } else {
        console.log('Mensaje recibido:', mensaje);
        socket.write('Mensaje recibido: ' + mensaje + '\n');
        }
    });
});

server.listen(8080, () => {
    console.log('Servidor de chat escuchando en el puerto 8080');
});