// Ejercicio 1: Calcular el precio final con IVA 
// Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
// función flecha para calcular el precio final. 

const prompt = require("prompt-sync")();

let precio = parseFloat(prompt("Ingresa un precio de un producto: "));
let iva = parseFloat(prompt("Ingresa un IVA (%): "));

let precioFinal = (precio,iva) => precio * (iva / 100) + precio;
console.log("Precio Final: ",precioFinal(precio,iva));

