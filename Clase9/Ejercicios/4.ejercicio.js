// Ejercicio 4:  
// Declara una variable nombre y pide al usuario que ingrese su nombre. 
// Verifica si el nombre ingresado es igual a tu nombre. 

const prompt = require("prompt-sync")({ sigint: true });

let miNombre = "Karen";
let tuNombre = prompt("Introduce tu nombre: ");

if (miNombre === tuNombre) {
    console.log("Tu nombre es igual al mio.");
    
}else {
    console.log("Tu nombre es diferente al mio.");
    
}
