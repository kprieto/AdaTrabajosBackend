/*Ejercicio 6: Calculadora de promedio       
Escribe una función que reciba un array de números y devuelva el 
promedio. 
Consigna: 
• Usa un bucle for para sumar los números. 
• Divide la suma total entre la cantidad de elementos del array. */

function calcularPromedio(numeros) {
        let suma = 0;
                
        for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        }
        
        const promedio = suma / numeros.length;
        
        return promedio;
}


const numeros = [8, 9, 10, 7, 6];
const promedio = calcularPromedio(numeros);
console.log("Números: ", numeros);
console.log("El promedio de los números es:", promedio);