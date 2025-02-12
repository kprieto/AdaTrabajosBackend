/*Ejercicio 6: Cliente interactivo con la usuaria 
Consigna 
Crea un cliente donde la usuaria pueda escribir mensajes en la consola y 
enviarlos al servidor. 
• Después de cada mensaje, la usuaria puede escribir otro. 
• Si escribe "salir", el cliente se desconecta. 
Pistas 
• Usa readline para capturar texto de la usuaria. 
• Si el mensaje es "salir", cierra la conexión con client.end(). */
const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const PORT = 5000;
const HOST = 'localhost';

const client = net.createConnection({port: PORT, host: HOST}, () => {
    console.log('Conectado al servidor');
    rl.question('Ingresa tu mensaje o salir: ', (mensaje) => {
        if (mensaje.toLowerCase() === 'salir') {
            client.end(); 
        } else {
            client.write(mensaje);
            rl.question('Ingresa otro mensaje: ', (mensaje) => {
                mensaje(mensaje);
            });
        }
    });
});

const mensaje = (mensaje) => {
    if (mensaje.toLowerCase() === 'salir') {
        client.end(); 
    } else {
        client.write(mensaje);
        rl.question('Ingresa otro mensaje: ', (mensaje) => {
            mensaje(mensaje);
        });
    }
};

client.on('error', (err)=> {
    console.log(`Error: `, err.message);
    
})