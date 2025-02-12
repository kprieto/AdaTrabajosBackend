// Ejercicio 5: Encuentra los números pares entre dos valores 
// Consigna: 
// Escribe un programa que le pida al usuario dos números enteros (inicio y fin). El 
// programa debe mostrar todos los números pares que se encuentran entre esos 
// dos valores, incluyendo los límites si son pares. Utiliza un ciclo for para recorrer 
// los números entre el inicio y el fin. Si el número inicial es mayor que el final, el 
// programa debe mostrar un mensaje indicando que los valores son inválidos. 


const prompt = require("prompt-sync")({ sigint: true });

let numInicio = parseInt(prompt("Introduce un número entero de inicio: "));
let numFin = parseInt(prompt("Introduce un número entero de fin: "));

if (numInicio < numFin){
    for (let i = numInicio; i <= numFin; i++){
        if (i % 2 == 0){
            console.log(i);
            
        }
    }
} else {
    console.log("El número de inicio es mas grande que el número fin. Intenta de nuevo.");
    
}
