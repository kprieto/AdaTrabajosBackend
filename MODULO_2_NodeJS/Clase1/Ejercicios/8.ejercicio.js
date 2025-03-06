/*Ejercicio 8: Contador de letras     
Crea una función que reciba una cadena de texto y una letra, y devuelva 
cuántas veces aparece esa letra en la cadena. 
Consigna: 
• Usa un bucle for y condicionales. 
• Haz que la búsqueda no distinga entre mayúsculas y minúsculas.*/

function contarLetra(cadena, letra) {
        let contador = 0;
        const letraMinuscula = letra.toLowerCase();
        
        for (let i = 0; i < cadena.length; i++) {
        
        if (cadena[i].toLowerCase() === letraMinuscula) {
            contador++;
        }
        }
        
        return contador;
}


const texto = "Programar es divertido";
const letra = "r";
const cantidadDeLetras = contarLetra(texto, letra);
console.log(`La letra '${letra}' aparece ${cantidadDeLetras} veces en el texto "${texto}".`);