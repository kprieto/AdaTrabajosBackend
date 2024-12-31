/*Ejercicio 3: Gestión Compleja de Arrays 
A partir del siguiente array de productos, escriba la función 
‘gestionarProductos’ que realice las siguientes tareas: 
1. Añada un nuevo producto al array. 
2. Elimine el último producto del array. 
3. Encuentre el índice de un producto específico. En este punto 
pueden usar forEach o investigar el método “findIndex()” 
https://developer.mozilla.org/en
US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex 
4. Verifique si existe un producto con precio mayor a 50. Para esto 
investigar el método “.some()” 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Glo
bal_Objects/Array/some 
5. Devuelva una cadena de nombres de productos separados por 
comas.*/

const productos = [ 
    { nombre: 'Cerezas', precio: 90 }, 
    { nombre: 'Platanos', precio: 30 }, 
    { nombre: 'Naranjas', precio: 65 }
];

function gestionarProductos(productos){
    productos.push({nombre: "Manzanas", precio: 36});
    productos.pop();
    let indiceProducto = productos.findIndex(producto => producto.nombre === 'Platanos');
    let existeProductoCaro = productos.some(producto => producto.precio > 50);
    let nombresProductos = productos.map(producto => producto.nombre).join(', ');

    return {
        indiceProducto,
        existeProductoCaro,
        nombresProductos
    };
}

console.log(gestionarProductos(productos));




