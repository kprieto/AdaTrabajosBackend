// Ejercicio 7: Calculadora simple 
// Consigna: 
// Crea un programa que le pida al usuario dos números y una operación 
// matemática a realizar: suma, resta, multiplicación o división. Según la operación 
// ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario 
// ingresa una operación inválida, el programa debe mostrar un mensaje de error. 
// Usa switch para resolverlo.


const prompt = require("prompt-sync")({ sigint: true });

let numeroA = parseFloat(prompt("Introduce el valor de A: "));
let numeroB = parseFloat(prompt("Introduce el valor de B: ")); 
let operacion = prompt("Introduce un signo para la operación Suma(+), Resta(-), Multiplicación(*) y División(/): ");

switch (operacion){
    case "+":
        console.log(`${numeroA} + ${numeroB} = ${numeroA + numeroB}`);
        break;
    case "-":
        console.log(`${numeroA} - ${numeroB} = ${numeroA - numeroB}`);
        break;
    case "*":
        console.log(`${numeroA} * ${numeroB} = ${numeroA * numeroB}`);
        break;
    case "/":
        console.log(`${numeroA} / ${numeroB} = ${numeroA / numeroB}`);
        break;
    default:
        console.log("No es una operación válida.");
        break;
}

