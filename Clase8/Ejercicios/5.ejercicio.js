// Ejercicio 5: Saludo personalizado 
// 1. Solicite al usuario que ingrese su nombre. 
// 2. Muestre un saludo personalizado usando el nombre ingresado. 

const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Introduce tu nombre: ");

let saludo = "Hola, " + nombre;

console.log(`${saludo}. Bienvenido(a) al curso de JavaScript!!! `);
