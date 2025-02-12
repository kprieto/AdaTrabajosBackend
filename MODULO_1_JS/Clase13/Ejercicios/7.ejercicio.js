// Ejercicio 7: Mensaje según la hora 
// Declara una variable global llamada horaActual (puedes asignarle un valor 
// fijo). Crea una función declarada llamada mostrarSaludo que imprima 
// "Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o 
// "Buenas noches" en cualquier otro caso. 
const prompt = require("prompt-sync")();

function mostrarSaludo(horas){
    if (horas < 12){
        return "Buenos días";
    } else if (horas < 18){
        return "Buenas tardes";
    } else {
        return "Buenas noches";
    }
}

let horas = parseFloat(prompt("Introduce el número de horas: "));
console.log(mostrarSaludo(horas));

