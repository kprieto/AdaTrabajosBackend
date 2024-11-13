// Ejercicio 4: Determinar si un número es par o impar
// 1. Solicite al usuario que ingrese un número entero. 
// 2. Determine si el número es par o impar. 
// 3. Muestre un mensaje indicando si el número es par o impar. 

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("Introduce un número entero: "));

if (numero % 2 == 0){
    console.log(`El número ${numero} es par.`);
    
} else {
    console.log(`El número ${numero} es impar.`);

}