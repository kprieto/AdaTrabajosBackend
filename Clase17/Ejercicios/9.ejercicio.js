/*Ejercicio 9: Desafío extra! Orden, lugar y números 
Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso, 
aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo 
mismo del ejercicio anterior (buscar la posición de un número en un 
array), pero partiendo de esta lista: 
Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor 
a mayor, utilizando bubble sort. Luego, respondan las siguientes 
preguntas: 
o ¿Cuál es la posición del número 12? 
o ¿Cuál es la posición del número 5? 
o ¿Cuál es la posición del número 22? 
o ¿Cuál es la posición del número 100? */

let numeros = [12, 3, 5, 7, 1, 22, 47, 100];


function bubbleSort(numeros) { 
    let n = numeros.length; 
    let paso; 
    do { 
        paso = false; 
        for (let i = 0; i < n - 1; i++) { 
            if (numeros[i] > numeros[i + 1]) { 
                [numeros[i], numeros[i + 1]] = [numeros[i + 1], numeros[i]]; 
                paso = true; 
            } 
        } 
    } while (paso); 
    return numeros; 
}

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

// Ordenar la lista usando Bubble Sort 
numeros = bubbleSort(numeros); 
console.log("Lista ordenada:", numeros); 

// Encontrar la posición de los números usando búsqueda binaria 
console.log("Posición del número 12:", busquedaBinaria(numeros, 12)); 
console.log("Posición del número 5:", busquedaBinaria(numeros, 5)); 
console.log("Posición del número 22:", busquedaBinaria(numeros, 22)); 
console.log("Posición del número 100:", busquedaBinaria(numeros, 100));

