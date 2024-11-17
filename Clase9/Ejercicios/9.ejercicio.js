// Ejercicio 9:  
// Define una constante PI con el valor de pi (3.14159). Pide al usuario 
// que ingrese el radio de un círculo y calcula su área y perímetro 
// utilizando la constante PI.
const prompt = require("prompt-sync")({ sigint: true });

const PI = 3.14159;

let radio = parseFloat(prompt("Introduce el radio de un círculo: "));

let area = PI * radio **2;
let perimetro = 2 * PI * radio;

console.log(`El área del círculo es ${area}`);
console.log(`El perímetro del círculo es ${perimetro}`);


