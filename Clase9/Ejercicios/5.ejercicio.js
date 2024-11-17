// Ejercicio 5: 
// Escribe un programa que pida al usuario que ingrese tres números y 
// determine cuál es el mayor de los tres. 

const prompt = require("prompt-sync")({ sigint: true });

let num1 = parseFloat(prompt("Introduce el primer número: "));
let num2 = parseFloat(prompt("Introduce el segundo número: "));
let num3 = parseFloat(prompt("Introduce el tercer número: "));

if (num1 > num2 && num1 > num3) {
    console.log(`El número(1) ${num1} es el mayor de los tres números.`);

} else if (num2 > num1 && num2 > num3) {
    console.log(`El número(2) ${num2} es el mayor de los tres números.`);
    
} else {
    console.log(`El número(3) ${num3} es el mayor de los tres números.`);
    
}