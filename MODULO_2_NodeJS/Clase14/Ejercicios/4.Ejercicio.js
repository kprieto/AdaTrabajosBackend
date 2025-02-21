/*Ejercicio 4: Ordenar una Lista de Números 
Crea un script en Node.js que permita al usuario ingresar una lista de 
números separados por comas. Ordena los números de menor a mayor y 
muestra la lista ordenada. */
const readlineSync = require('readline-sync');

const input = readlineSync.question('Ingresa una lista de numeros separados por comas: ');

const numeros = input.split(',').map(Number);

numeros.sort((a, b) => a - b);

console.log('Lista ordenada: ' + numeros.join(', '));