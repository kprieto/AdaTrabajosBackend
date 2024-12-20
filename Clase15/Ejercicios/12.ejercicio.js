/*Clasificación de palabras según su longitud 
Tienes una lista de palabras en una oración. Debes: 
1. Dividir la oración en palabras individuales. 
2. Clasificar las palabras en dos categorías: 
▪ Cortas (menos de 5 letras) 
▪ Largas (5 letras o más) 
3. Mostrar ambas listas de palabras clasificadas. 
4. La oración es: "JavaScript es un lenguaje poderoso y versátil". */

let frase = "JavaScript es un lenguaje poderoso y versátil";

let separarFrase = frase.split(" ");
console.log("Separar Frase: ",separarFrase);

let palabrasCortas = [];
let palabrasLargas = [];

function clasificarPalabras(separarFrase){
    let { cortas, largas } = separarFrase.reduce((resultado, palabra) => {
        if (palabra.length < 5) {
            resultado.cortas.push(palabra);
        } else {
            resultado.largas.push(palabra);
        }
        return resultado;
    }, { cortas: [], largas: [] });

    return { cortas, largas };
}

let resultado = clasificarPalabras(separarFrase);

console.log("Palabras cortas:", resultado.cortas);
console.log("Palabras largas:", resultado.largas);
