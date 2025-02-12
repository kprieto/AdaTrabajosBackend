// Ejercicio 6: Iguales a 10 pero menores de 1000 
// Dada una matriz, recorrer sus valores y sumar solo los números que estén 
// por encima o sean iguales a 10, pero menores que 1000. 

const prompt = require("prompt-sync")({ sigint: true });

let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];
let suma = 0;
for (let fila = 0; fila < matriz.length; fila++){
    for (let col = 0; col < matriz[fila].length; col++){
        if (matriz[fila][col] >= 10 && matriz[fila][col] < 1000 ){
            suma += matriz[fila][col];
        }
    }
}
console.log(`La suma es ${suma}`);
