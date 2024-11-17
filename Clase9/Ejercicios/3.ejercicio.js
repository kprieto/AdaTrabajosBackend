// Ejercicio 3: 
// Declara dos variables booleanas condicion1 y condicion2. Pide al 
// usuario que ingrese dos valores booleanos (true o false) y muestra el 
// resultado de diversas combinaciones lógicas. 
const prompt = require("prompt-sync")({ sigint: true });

let condicion1 = prompt("Ingresa el primer valor booleano (true/false) para condicion1: ");
let condicion2 = prompt("Ingresa el segundo valor booleano (true/false) para condicion2: ");

console.log("Resultados de combinaciones lógicas:");
console.log(`condicion1 AND condicion2: ${condicion1 && condicion2}`);
console.log(`condicion1 OR condicion2: ${condicion1 || condicion2}`);
console.log(`NOT condicion1: ${!condicion1}`);
console.log(`NOT condicion2: ${!condicion2}`);
console.log(`(condicion1 AND condicion2) OR NOT condicion1: ${((condicion1 && condicion2) || !condicion1)}`);
console.log(`NOT (condicion1 OR condicion2): ${!(condicion1 || condicion2)}`);



