/*Ejercicio 4: Contando vocales 🅰️🅾️ 
Crea una función que reciba una cadena de texto y devuelva cuántas 
vocales contiene. 
Consigna: 
• Usa un bucle for y condicionales. 
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u). */
function contarVocales(cadena) {
        let contador = 0;
        const vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        
        for (let i = 0; i < cadena.length; i++) {
            if (vocales.includes(cadena[i])) {
                contador++;
            }
        }
        
        return contador;
}

const texto = "¡Hola Chicas Programadoras!";
const cantidadDeVocales = contarVocales(texto);
console.log("Frase: ", texto);
console.log("Cantidad de vocales en el texto:", cantidadDeVocales);