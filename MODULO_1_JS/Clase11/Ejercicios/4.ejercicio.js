// Ejercicio 4: ¿Es par o impar? 
// Consigna: 
// Los números pueden ser pares o impares. Escribe un programa que le pida al 
// usuario un número y determine si es par o impar. Muestra un mensaje 
// explicativo indicando qué significa cada caso. 

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("Introduce un número: "));

let numParoImpar= numero % 2 ==0 ? `El número ${numero} es par.` : `El número ${numero} es impar.`
console.log(numParoImpar);
