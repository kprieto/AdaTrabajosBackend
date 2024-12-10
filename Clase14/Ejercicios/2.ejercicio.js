// Ejercicio 2: Calcular promedio de calificaciones 
// Solicita al usuario cinco calificaciones y usa una función flecha para calcular 
// el promedio. 

const prompt = require("prompt-sync")();

let sumaCalificaciones = 0;

for (let i = 0; i < 5; i++){
    let calificaciones = parseFloat(prompt("Introduce una calificación: "));
    sumaCalificaciones += calificaciones
}

let calcularPromedio = (sumaCalificaciones) => sumaCalificaciones / 5;
console.log("El promedio de las 5 calificaciones es ", calcularPromedio(sumaCalificaciones));
