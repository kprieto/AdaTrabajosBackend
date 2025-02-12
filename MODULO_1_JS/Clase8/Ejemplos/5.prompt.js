// Utilizando prompt

const prompt = require("prompt-sync")({ sigint: true }); 

let nombre = prompt("Ingresa un nombre: ");
console.log(`Hola ${nombre}!!!`)