// Ejercicio 2: Número mayor (función expresada) 
// Crea una función expresada llamada encontrarMayor que reciba dos 
// números como parámetros y devuelva el número mayor.

const prompt = require("prompt-sync")();

let encontrarMayor = function(numero1, numero2){
    if (numero1 > numero2){
        return `El numero1 ${numero1} es el mayor`;
    } else {
        return `El numero2 ${numero2} es el mayor`;

    }
}

console.log(encontrarMayor(25,85));
console.log(encontrarMayor(152,65));

