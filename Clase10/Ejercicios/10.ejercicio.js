// Ejercicio 10 - Cálculo de Descuento: Escribe un programa que calcule el 
// precio final de un producto después de aplicar un descuento. Pide al 
// usuario que ingrese el precio original y el porcentaje de descuento, y 
// muestra el precio final. 
// Pista1: Investiga que es ParseFloat, ya que el ejercicio lo requiere 
// Pista 2: La fórmula puede representarse asi: 
// let montoDescuento = precioOriginal * (porcentajeDescuento / 100); 
// 1. Pedir al usuario que ingrese un precio 
// 2. Pedir al usuario que ingrese un descuento
// 3. Realizar el calculo del precio final
// 4. Mostrar el resultado

const prompt = require("prompt-sync")({ sigint: true });

let precio = parseFloat(prompt("Introduce un precio para el producto: "));
let descuento = parseFloat(prompt("Introduce un % de descuento para el producto: "));
let montoDescuento = precio * (descuento/100)
let precioFinal = precio - montoDescuento;

console.log(`El precio final del producto con el descuento ${descuento}% es ${precioFinal}.`);
