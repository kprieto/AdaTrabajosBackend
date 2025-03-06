/*Ejercicio 3: Ordenando números       
Crea una función que reciba un array de números y devuelva un nuevo 
array con los números ordenados de menor a mayor. 
Consigna: 
• Usa el método sort(). */
function ordenarNumeros(array) {

    const nuevoArray = [...array];    
    nuevoArray.sort((a, b) => a - b);
    
    return nuevoArray;
}


const numeros = [5, 2, 9, 1, 7, 4, 6];
const numerosOrdenados = ordenarNumeros(numeros);
console.log("Array original:", numeros);
console.log("Array ordenado:", numerosOrdenados);