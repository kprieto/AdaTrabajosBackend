const fs = require('fs');
/*Ejercicio 6: Aplicación de Cifrado con Módulo Crypto y Readline 
Consigna: 
Crea una aplicación que permita a los usuarios cifrar y descifrar mensajes 
usando el módulo crypto. Implementa un menú interactivo con readline
sync. 
Pasos: 
• Usa crypto.createCipheriv y crypto.createDecipheriv para cifrar y 
descifrar mensajes. 
• Usa readline-sync para crear un menú interactivo. 
• Guarda los mensajes cifrados en un archivo JSON. */
const path = require('path');
const crypto = require('crypto');
const readlineSync = require('readline-sync');

const mensajesPath = path.join(__dirname, 'mensajes.json');


if (!fs.existsSync(mensajesPath)) {
    fs.writeFileSync(mensajesPath, JSON.stringify({ mensajes: [] }, null, 2), 'utf8');
}


const algoritmo = 'aes-256-ctr';
const clave = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


const cifrarMensaje = (mensaje) => {
    const cifrador = crypto.createCipheriv(algoritmo, clave, iv);
    let mensajeCifrado = cifrador.update(mensaje, 'utf8', 'hex');
    mensajeCifrado += cifrador.final('hex');
    return mensajeCifrado;
};


const descifrarMensaje = (mensajeCifrado) => {
    const descifrador = crypto.createDecipheriv(algoritmo, clave, iv);
    let mensajeDescifrado = descifrador.update(mensajeCifrado, 'hex', 'utf8');
    mensajeDescifrado += descifrador.final('utf8');
    return mensajeDescifrado;
};


const guardarMensajeCifrado = (mensajeCifrado) => {
    const datos = JSON.parse(fs.readFileSync(mensajesPath, 'utf8'));
    datos.mensajes.push(mensajeCifrado);
    fs.writeFileSync(mensajesPath, JSON.stringify(datos, null, 2), 'utf8');
    console.log('Mensaje cifrado guardado:', mensajeCifrado);
};


const menu = () => {
    console.log('\nAplicación de Cifrado');
    console.log('1. Cifrar mensaje');
    console.log('2. Descifrar mensaje');
    console.log('3. Salir');

    const opcion = readlineSync.question('Elige una opción: ');

    switch (opcion) {
        case '1':
        const mensaje = readlineSync.question('Ingresa el mensaje a cifrar: ');
        const mensajeCifrado = cifrarMensaje(mensaje);
        guardarMensajeCifrado(mensajeCifrado);
        break;
        case '2':
        const mensajeCifradoDescifrar = readlineSync.question('Ingresa el mensaje cifrado: ');
        const mensajeDescifrado = descifrarMensaje(mensajeCifradoDescifrar);
        console.log('Mensaje descifrado:', mensajeDescifrado);
        break;
        case '3':
        console.log('Gracias por su visita!');
        process.exit();
        break;
        default:
        console.log('Opción no válida.');
    }
};


while (true) {
    menu();
}