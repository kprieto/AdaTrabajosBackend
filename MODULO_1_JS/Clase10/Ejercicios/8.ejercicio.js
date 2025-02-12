// Ejercicio 8 - Conversión de Temperaturas: Escribe un programa que 
// convierta una temperatura dada en grados Celsius a grados Fahrenheit. 
// La fórmula de conversión es: 
//         F = C x 9/5 + 32
// Pide al usuario que ingrese la temperatura en Celsius y muestra el 
// resultado en Fahrenheit. 
// Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere 
// Pista 2: La fórmula puede representarse asi:  
// let fahrenheit = celsius * 9 / 5 + 32;  
// 1. Pedir al usuario los grados Celsius
// 2. Guardar el resultado en una variable
// 3. Aplicar la fórmula para convertir grados Celsiud a Fahrenheit
// 4. Mostrar el resultado
const prompt = require("prompt-sync")({ sigint: true });

let temperaturaCelsius = parseFloat(prompt("Introduce los grados en Celcius: "));
let fahrenheit = temperaturaCelsius * 9/5 + 32;
console.log(`La temperatura en grados Fahrenheit es ${fahrenheit}`);

