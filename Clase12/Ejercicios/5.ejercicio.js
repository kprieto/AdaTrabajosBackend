// Ejercicio 5: Uso de Arrays y Condicionales 
// Crea un programa que solicite al usuario ingresar 5 nombres y los 
// almacene en un array. Luego, solicita al usuario ingresar un nombre y 
// verifica si ese nombre se encuentra en el array. (Pueden desglosar en 
// pasos el código si eso les facilita su desarrollo) 


const prompt = require("prompt-sync")({ sigint: true });

let listaNombres = [];
for (let i = 0; i<5; i++){
    nombre = prompt(`Ingresa el nombre ${i + 1} de 5:`).toLowerCase();
    listaNombres[i]= nombre;
}
console.log("Nombres ingresados: " + listaNombres);

let nuevoNombreBuscar = prompt("Ingresa un nombre para verificar si está en la lista: ").toLowerCase();


if (listaNombres.includes(nuevoNombreBuscar)){
    console.log(`El nombre ${nuevoNombreBuscar} ya existe en la lista.`);
} else {
    console.log(`El nombre ${nuevoNombreBuscar} no existe en la lista.`);
}

