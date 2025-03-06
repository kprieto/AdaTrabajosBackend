/*Ejercicio 5: Generador de iniciales 🅰️ 
Escribe una función que reciba un nombre completo y devuelva las 
iniciales en mayúsculas. 
Consigna: 
• Usa el método split() para dividir el nombre. 
• Usa un bucle for y métodos de string. */
function generarIniciales(nombreCompleto) {

        const palabras = nombreCompleto.split(' ');
        let iniciales = '';
    

        for (let i = 0; i < palabras.length; i++) {
        
        iniciales += palabras[i].charAt(0).toUpperCase();
        }
    
        return iniciales;
}


const nombre = "Juan perez gomez";
const iniciales = generarIniciales(nombre);
console.log("Nombre: ", nombre);
console.log("Iniciales en mayúsculas del nombre:", iniciales);