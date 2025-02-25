const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function esComandoValido(comando) {
    const regex = /^CMD_\w+$/;
    return regex.test(comando);
}

const client = net.createConnection({ port: 5000 }, () => {
    console.log('Conectado al servidor');
    client.write('CMD_HOLA');
});

client.on('data', (data) => {
    const respuesta = data.toString().trim();
    console.log('Respuesta del servidor:', respuesta);
    if (respuesta === 'EXIT') {
        console.log('Recibido comando EXIT. Cerrando la conexión.');
        client.end();
        rl.close();
    } else {
        rl.question('Ingresa un comando: ', (comando) => {
            if (esComandoValido(comando)) {
                client.write(comando);
            } else {
                console.log('Comando no válido. Debe empezar con "CMD_".');
            }
        });
    }
});

client.on('end', () => {
    console.log('Servidor cerró la conexión');
    rl.close();
});

client.on('error', (err) => {
    console.error('Error en la conexión:', err.message);
    rl.close();
});