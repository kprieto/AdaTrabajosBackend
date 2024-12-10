// Ejercicio 8: Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
// Crea una función expresada llamada convertirCelsiusAFahrenheit que 
// reciba una temperatura en grados Celsius y devuelva la temperatura en 
// Fahrenheit. 
//     Fahrenheit = (Celsius x 9/5) + 32
const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Introduce la temperatura en grados Celsius: "));

let convertirCelsiusAFahrenheit = function (celsius) {
   return (celsius * 9/5) + 32;
}

console.log("La temperatura en grados Fahrenheit es: ",convertirCelsiusAFahrenheit(celsius));
