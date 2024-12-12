/*Ejercicio 5: Verificar origen del auto 
Solicita al usuario ingresar la marca de un auto y utiliza una función flecha 
para verificar y mostrar si el auto es de origen nacional o importado. Considera 
que solo los autos de marcas "Chevrolet", "Ford" y "Fiat" son de origen 
nacional. 
✓ Solicita al usuario que ingrese la marca de un auto. 
✓ Utiliza una función flecha para determinar si la marca ingresada 
corresponde a un auto de origen nacional o importado. 
✓ Muestra un mensaje indicando si el auto es de origen nacional o 
importado, basado en la marca ingresada por el usuario.*/

const prompt= require("prompt-sync")();

let marcaAuto = prompt("Introduce una marca de auto: ");

function capitalizarPrimeraLetra(marcaAuto) {
    return marcaAuto.charAt(0).toUpperCase() + marcaAuto.slice(1);
}

const verficarAuto = (marcaAuto) => {
    if ("Chevrolet" === marcaAuto){
        return `El auto ${marcaAuto} es de origen nacional.`
    } else if ("Ford" === marcaAuto) {
        return `El auto ${marcaAuto} es de origen nacional.`
    } else if ("Fiat" === marcaAuto){
        return `El auto ${marcaAuto} es de origen nacional.`
    } else {
        return `El auto ${marcaAuto} es de origen importado.`

    }
}

console.log(verficarAuto(capitalizarPrimeraLetra(marcaAuto)));
