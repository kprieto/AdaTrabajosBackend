// Ejercicio 7: Matriz 5x5 
// Declara una variable que contenga una matriz de 5x5 llena de puros 
// números enteros y positivos. Luego, escribe un algoritmo para sumar 
// todos los números en la matriz. 

let matriz = [
    [25, 36, 2, 85, 10],
    [65, 100, 25, 45, 5],
    [14, 2, 3 ,98, 102],
    [1, 8, 75, 23, 62],
    [36, 55, 256, 47, 163]
];

let suma = 0;
for (let fila = 0; fila < matriz.length; fila++){
    for (let col = 0; col < matriz[fila].length; col++){
        
        suma += matriz[fila][col];
    
    }
}
console.log(`La suma es ${suma}`);