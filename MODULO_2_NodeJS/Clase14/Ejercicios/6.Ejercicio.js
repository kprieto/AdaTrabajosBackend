/*DESAFIO Ejercicio 6: Hash de Contraseña con Sal 
Crea un script en Node.js que permita al usuario ingresar una contraseña 
y un "sal" (un valor aleatorio que se usa para añadir seguridad). Luego, 
genera un hash de la contraseña combinada con el "sal" usando el 
algoritmo SHA-256. Muestra el hash generado. */

const crypto = require('crypto')
const readlineSync = require('readline-sync');

const password = readlineSync.question('Ingresa tu contrasena: ', {
    hideEchoBack: true
});

const sal = readlineSync.question('Ingresa la palabra sal: ');
const union = password + sal;
const hash = crypto.createHash('sha256');

hash.update(union);

const hashOutput = hash.digest('hex')

console.log('Hash de sha256 de la contrasena combinada con el sal es: ', hashOutput);
