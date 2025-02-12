// Ejercicio 8:
// Pide al usuario que ingrese las longitudes de los tres lados de un 
// triángulo. Determina y muestra si el triángulo es equilátero, isósceles o 
// escaleno. (Investiga sobre los triángulos para determinar la formula)

const prompt = require("prompt-sync")({ sigint: true });

let ladoA = parseFloat(prompt("Introduce la longitud del lado A del triángulo: "));
let ladoB = parseFloat(prompt("Introduce la longitud del lado B del triángulo: "));
let ladoC = parseFloat(prompt("Introduce la longitud del lado C del triángulo: "));

if (ladoA === ladoB &&  ladoB === ladoC ){
    console.log("Las longitudes es de un triángulo equilátero.");
    
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoA) {
    console.log("Las longitudes es de un triángulo isósceles.");
    
} else if (ladoA != ladoB && ladoB != ladoC && ladoA != ladoC) {
    console.log("Las longitudes es de un triángulo escaleno.");
    
} else {
    console.log("Las longitudes ingresadas no forma un triángulo válido.");
    
}