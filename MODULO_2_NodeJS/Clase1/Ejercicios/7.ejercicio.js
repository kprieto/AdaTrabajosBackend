/*Ejercicio 7: Filtrar palabras largas        
Escribe una función que reciba un array de palabras y un número, y 
devuelva las palabras que tienen más caracteres que el número dado. 
Consigna: 
• Usa el método filter(). 
• Usa una función flecha para simplificar el código. */

const filtrarPalabrasLargas = (palabras, longitud) => {
    return palabras.filter(palabra => palabra.length > longitud);
};


const palabras = ["css", "html", "JavaScript", "Programación", "Nodejs"];
const longitud = 5;
const palabrasFiltradas = filtrarPalabrasLargas(palabras, longitud);
console.log("Palabras más largas que", longitud, "caracteres:", palabrasFiltradas);