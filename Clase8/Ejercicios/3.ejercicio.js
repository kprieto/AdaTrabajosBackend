// Ejercicio 3: Suma de dos números ingresados por el usuario
// 1. Pida al usuario que ingrese dos números. 
// 2. Sume ambos números. 
// 3. Muestre el resultado de la suma.

const prompt = require("prompt-sync")({ sigint: true });

let numA = parseFloat(prompt("Introduce un número: "));
let numB = parseFloat(prompt("Introduce un número: "));

let suma = numA + numB;

console.log(`La operación de ${numA} + ${numB} = ${suma}`);
