// Ejercicio 2: Verificar si un número es positivo, negativo o cero 
// 1. Pida al usuario que ingrese un número. 
// 2. Verifique si el número es positivo, negativo o igual a cero. 
// 3. Muestre un mensaje indicando cuál es el caso. 

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("Introduce un número: "));

if (numero > 0) {
    console.log(`El número ${numero} es positivo.`);
    
} else if (numero < 0) {
    console.log(`El número ${numero} es negativo.`);

} else {
    console.log(`El número es ${numero}.`);
}