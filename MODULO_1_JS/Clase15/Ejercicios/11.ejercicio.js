/*Gestión de inventario de una tienda 
Eres encargado de una tienda y tienes un inventario inicial de productos. 
La lista de productos es: 
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"]; 
Debes realizar las siguientes acciones: 
1. Agregar un nuevo producto "Impresora" al inventario usando el 
método adecuado. 
2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje 
adecuado. 
3. Eliminar el primer producto del inventario. 
4. Mostrar la lista actualizada de productos en una sola cadena, 
separados por comas. */

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];

inventario.push("Impresora");
console.log("Inventario actual: ", inventario);

let tieneTablet = inventario.includes("Tablet");

if (tieneTablet === true){
    console.log("El producto Tablet está en el inventario.");
    
} else {
    console.log("El producto Tablet no está en el inventario.");

}

let eliminarProducto = inventario.shift();
console.log("Se elimino el producto ",eliminarProducto);

let productos = inventario.join(",");
console.log("Lista actualiza del inventario de productos: ",productos);
