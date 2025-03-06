/*Ejercicio 10: Invertir palabras     
Crea una función que reciba una cadena de texto y devuelva otra cadena 
con las palabras en orden inverso. 
Consigna: 
• Usa el método split() para separar las palabras. 
• Usa el método reverse() para invertir el array. 
• Usa el método join() para unir las palabras en una nueva cadena. */

function invertirPalabras(cadena) {

    const palabras = cadena.split(' ');

    const palabrasInvertidas = palabras.reverse();

    const cadenaInvertida = palabrasInvertidas.join(' ');

    return cadenaInvertida;
}


const texto = "Aprender a programar es divertido";
const textoInvertido = invertirPalabras(texto);
console.log("Cadena original:", texto);
console.log("Cadena invertida:", textoInvertido);