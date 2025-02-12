// Ejercicio 6:  
// Pide al usuario que ingrese su edad y verifica si es mayor o menor de 
// edad. Muestra un mensaje personalizado según el caso. 

const prompt = require("prompt-sync")({ sigint: true });

let edad = parseFloat(prompt("Introduce tu edad: "));

if (edad >= 18 && edad <= 59) {
    console.log("Eres mayor de edad.");
    
} else if (edad >= 60) { 
    console.log("Eres un adulto mayor.");
    
} else {
    console.log("Eres menor de edad.");
    
}