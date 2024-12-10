// Ejercicio 5: Concatenar nombres (función expresada) 
// Crea una función expresada llamada concatenarNombres que reciba dos 
// nombres (nombre y apellido) como parámetros y devuelva el nombre 
// completo concatenado. 

const prompt = require("prompt-sync")();

let concatenarNombres = function(nombre, apellido){
    return nombre + " " + apellido;
}

let nombre = prompt("Introduce tu nombre: ");
let apellido = prompt("Introduce tu apellido: ");

console.log("Hola ",concatenarNombres(nombre, apellido));
