/*Ejercicio 8: Lugar y números 
Para practicar la implementación del algoritmo de búsqueda binaria, 
vamos a empezar con un ejemplo simple. Quiero que se familiaricen con 
la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la 
solución. 
Dada la siguiente lista: 
Utilizar el algoritmo de búsqueda binaria para responder los siguientes 
ítems: 
o ¿Cuál es la posición del número 1? 
o ¿Cuál es la posición del número 5? 
o ¿Cuál es la posición del número 6? 
o ¿Cuál es la posición del número 9? 
o ¿Cuál es la posición del número 11? */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];  

function busquedaBinaria(list, item) { 
    let inicio = 0; 
    let fin = list.length - 1; 
    
    while (inicio <= fin) { 
        let medio = Math.floor((inicio + fin) / 2); 
        if (list[medio] === item) { 
            return medio;  
        } else if (list[medio] < item) { 
            inicio = medio + 1; 
        } else { 
            fin = medio - 1; 
        } 
    } 
    return -1;  
}

console.log("Posición del número 1:", busquedaBinaria(numeros, 1)); 
console.log("Posición del número 5:", busquedaBinaria(numeros, 5)); 
console.log("Posición del número 6:", busquedaBinaria(numeros, 6)); 
console.log("Posición del número 9:", busquedaBinaria(numeros, 9)); 
console.log("Posición del número 11:", busquedaBinaria(numeros, 11));