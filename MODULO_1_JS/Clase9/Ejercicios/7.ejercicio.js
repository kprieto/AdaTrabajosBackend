// Ejercicio 7:  
// Pide al usuario que ingrese su peso en kilogramos y conviértelo a 
// libras. Muestra el resultado con un mensaje. (Averigua como pasar de 
// kg a libras, Pista: 2.20462) 

const prompt = require("prompt-sync")({ sigint: true });

const LIBRAS = 2.20462;

let pesoKg = parseFloat(prompt("Introduce tu peso en kilogramos: "));

let pesoLibras = pesoKg * LIBRAS;

console.log(`Tu peso ${pesoKg} kg en libras es ${pesoLibras}`);


