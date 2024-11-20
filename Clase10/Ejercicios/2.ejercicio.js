// Ejercicio 2 – Usando las variables:  
// Escribe un programa que pida al usuario que ingrese su nombre, su 
// edad y su peso, y luego muestre un mensaje personalizado que incluya 
// toda esta información. 
// 1. Pide al usuario que ingrese su nombre. 
// 2. Pide al usuario que ingrese su edad. 
// 3. Pide al usuario que ingrese su peso. 
// 4. Muestra un mensaje personalizado que incluya el nombre, la edad 
// y el peso del usuario. 
const prompt = require("prompt-sync")({ sigint: true });

let edad;
let peso;

let nombre = prompt("Introduce tu nombre: ");
edad = parseInt(prompt("Introduce tu edad: "));
peso = parseFloat(prompt("Introduce tu peso en kg: "));

console.log(`Hola ${nombre} tu edad es ${edad} y tu peso es ${peso} kg.`);
