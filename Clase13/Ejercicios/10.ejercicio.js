// Ejercicio 10: Factorial de un número (Ejercicio entrevista) 
// Crea una función expresada llamada calcularFactorial que reciba un 
// número y devuelva su factorial. 
// Fórmula del factorial: 
//     n! = n x (n-1) x... x 1
const prompt = require("prompt-sync")();

let num = parseFloat(prompt("Introduce un número: "));

let calcularFactorial = function (num){
    let factorial = 1;
    while (num > 1 ){
        factorial *= num
        num -= 1
    }
    return factorial;
}
console.log(`El factorial ${num}! es ${calcularFactorial(num)}`);
