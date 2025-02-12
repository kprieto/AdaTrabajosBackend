// Ejercicio 2:  
// Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con 
// valores numéricos de tu elección. Pide al usuario que ingrese un 
// número y verifica si está dentro del rango definido por las constantes.

const prompt = require("prompt-sync")({ sigint: true });

const RANGO_MINIMO = 20;
const RANGO_MAXIMO = 50;

let numero = parseFloat(prompt("Introduce un número: "));


if (numero >= RANGO_MINIMO && numero <= RANGO_MAXIMO) {
    console.log("El número está en el rango.");
    
} else {
    console.log("El número no está en el rango.");
    
}