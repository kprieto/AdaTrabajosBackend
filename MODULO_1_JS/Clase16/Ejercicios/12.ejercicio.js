/*Calcula el total de ventas de productos seleccionados 
Supón que tienes una lista de productos con sus precios en formato de 
objeto: 
const products = [ 
{ name: 'Laptop', price: 1000 }, 
{ name: 'Mouse', price: 25 }, 
{ name: 'Teclado', price: 50 }, 
{ name: 'Monitor', price: 200 }, 
{ name: 'Audífonos', price: 75 } 
]; 
Queremos: 
o Seleccionar los productos cuyo precio sea mayor o igual a 50. 
o Obtener solo los nombres de esos productos. 
o Calcular el precio total sumando los precios de los productos 
seleccionados. 
o Imprime el total y los nombres de los productos seleccionados en la 
consola. */

const products = [ 
    { name: 'Laptop', price: 1000 }, 
    { name: 'Mouse', price: 25 }, 
    { name: 'Teclado', price: 50 }, 
    { name: 'Monitor', price: 200 }, 
    { name: 'Audífonos', price: 75 } 
    ]; 

// 1. Filtrar productos con precio mayor o igual a 50
let productosFiltrados = products.filter(product => product.price >= 50);

// 2. Obtener solo los nombres de los productos filtrados
let nombresProductos = productosFiltrados.map(product => product.name);

// 3. Calcular el precio total
let precioTotal = productosFiltrados.reduce((total, product) => total + product.price, 0);

// 4. Imprimir resultados en la consola
console.log("Productos seleccionados:");
console.log(nombresProductos);
console.log("Precio total:", precioTotal);