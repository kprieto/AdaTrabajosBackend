/*Ejercicio 2: Análisis y Modificación de Cadenas de Texto 
Pide al usuario que ingrese una oración. Luego, escribe la función 
“procesarOracion” que haga lo siguiente: 
1. Quite los espacios en blanco al principio y al final. 
2. Divida la oración en palabras. 
3. Reemplace todas las vocales 'a' por '@'. Tener en cuenta utilizar 
“/a/g” que indica que se debe buscar todas las apariciones del 
carácter 'a' en la cadena (la bandera g es para global, lo que 
significa que reemplazará todas las apariciones, no solo la primera). 
4. Encuentre la posición de la primera aparición de la palabra 
"javascript". De no aparecer retornar -1 
5. Convierta la oración a una cadena de palabras separadas por 
guiones. */

const prompt = require('prompt-sync')();

let oracion = prompt("introduce una oración: ");

const procesarOracion =(oracion) => {
    oracion.trim();
    oracion = oracion.split(" ");
    let oracionModificada = oracion.map(palabra => palabra.replace(/a/g, '@'));
    let findJavascript = oracion.indexOf("javascript");
    console.log(findJavascript === 0 ? "Si existe la palabra Javascript" : "No existe la palabra Javascript");
    oracionModificada = oracionModificada.join(" - ");
    return oracionModificada;
};

console.log(procesarOracion(oracion));