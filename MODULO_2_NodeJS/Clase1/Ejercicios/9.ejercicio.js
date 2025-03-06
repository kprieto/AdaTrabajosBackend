/*Ejercicio 9: Números únicos     
Escribe una función que reciba un array de números y devuelva un nuevo 
array sin números repetidos. 
Consigna: 
• Usa el objeto Set para eliminar duplicados. 
• Convierte el Set a un array usando el operador spread (...). */

function eliminarDuplicados(array) {

    const setSinDuplicados = new Set(array);
    
    const arraySinDuplicados = [...setSinDuplicados];
    
    return arraySinDuplicados;
}


const numeros = [1, 2, 3, 2, 4, 1, 5];
const numerosUnicos = eliminarDuplicados(numeros);
console.log("Array original:", numeros);
console.log("Array sin duplicados:", numerosUnicos);