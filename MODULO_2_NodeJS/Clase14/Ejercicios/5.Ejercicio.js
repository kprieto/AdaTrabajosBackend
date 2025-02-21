/*DESAFIO Ejercicio 5: Cifrado y Descifrado Básico con crypto 
Crea un script en Node.js que permita al usuario ingresar un texto, luego 
lo cifre usando el algoritmo AES-256-CBC y lo descifre para mostrar el 
resultado original. Usa el módulo crypto para el cifrado y descifrado.*/

const crypto = require('crypto')
const readlineSync = require('readline-sync');

const algoritmo = 'aes-256-cbc' 
const key = crypto.randomBytes(32) 
const iv = crypto.randomBytes(16) 
const data = readlineSync.question('Por favor, ingrese un texto: ', {
    hideEchoBack: true
}); 

const cipher = crypto.createCipheriv(algoritmo, key, iv)

// ciframos los datos
let encriptado = cipher.update(data, 'utf8', 'hex')
encriptado += cipher.final('hex')

console.log('Texto cifrado: ', encriptado);

const decipher = crypto.createDecipheriv(algoritmo, key, iv)
let decifrado = decipher.update(encriptado, 'hex', 'utf8')
decifrado += decipher.final('utf8')

console.log('Texto decifrado: ', decifrado);