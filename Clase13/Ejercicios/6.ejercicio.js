// Ejercicio 6: Convertir a minutos 
// Crea una función declarada llamada convertirHorasAMinutos que reciba 
// un número de horas como parámetro y devuelva el total en minutos. 

const prompt = require("prompt-sync")();

function convertirHorasAMinutos(horas){
    let minutos = horas * 60;
    return minutos;
}

let horas = parseFloat(prompt("Introduce el número de horas a convertir: "));

console.log(`Las ${horas} horas en minutos son: ${convertirHorasAMinutos(horas)}`);
