/*Ejercicio 4: Calcular descuento por cantidad 
Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la cantidad.*/
const prompt= require("prompt-sync")();

let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos:"));
let precioPorProducto = parseFloat(prompt("Ingrese el precio unitario por producto:"));

const calcularTotalConDescuento = (cantidad, precioUnitario) => {
    let descuento = 0;
    if (cantidad >= 100) {
      descuento = 0.1; // 10% de descuento
    } else if (cantidad >= 50) {
      descuento = 0.05; // 5% de descuento
    }

    let subtotal = cantidad * precioUnitario;
    let descuentoTotal = subtotal * descuento;
    let total = subtotal - descuentoTotal;

    return total;
};

let totalPagar = calcularTotalConDescuento(cantidadProductos, precioPorProducto);
console.log("El total a pagar es: $" + totalPagar);