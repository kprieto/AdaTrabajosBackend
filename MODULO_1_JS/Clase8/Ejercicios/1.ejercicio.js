//Ejercicio 1: Calcula el doble de un número 
// 1. Solicite al usuario que ingrese un número cualquiera. 
// 2. Calcule el doble de ese número. 
// 3. Muestre el resultado en la consola.
const prompt = require("prompt-sync")({ sigint: true });

let numero = prompt("Introduce un número: ");

let numDoble = numero * 2;

console.log(`El doble de ${numero} es ${numDoble}. `);
