// Ejercicio 3: ¿Sabes contar? 
// Consigna: 
// Crea un programa que le pida al usuario un número positivo. El programa 
// deberá contar desde el 1 hasta ese número e imprimir cada valor en la consola. 
// Usa un ciclo for para realizar la tarea.

const prompt = require("prompt-sync")({ sigint: true });

let numero = parseFloat(prompt("Introduce un número positivo: "));

for (let i= 1; i <= numero; i++){
    console.log(i);
    
}