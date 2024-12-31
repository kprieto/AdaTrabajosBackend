/*Ejercicio 6: Autos y más autos… 
Escribe una función "gestionarAutos" que realice las siguientes tareas con 
una lista predefinida de marcas de autos: 
1. Quite los espacios en blanco alrededor de cada marca. 
2. Verifique si existe la marca "Tesla". 
3. Reemplace todas las marcas "Ford" por "BMW". 
4. Encuentre el índice de la marca "Chevrolet".  
5. Devuelva una cadena de marcas en orden alfabético separadas por 
puntos. Utilizar “.sort()”*/

let marcas = "Toyota, Honda, Ford, Chevrolet, Nissan";

function gestionarAutos(marcas){
    marcas = marcas.split(',').map(marca => marca.trim());
    let existeTesla = marcas.includes('Tesla');
    let condiccionTesla = existeTesla === true ? "Si existe." : "No existe.";
    marcas = marcas.map(marca => marca === 'Ford' ? 'BMW' : marca);
    let indiceChevrolet = marcas.indexOf('Chevrolet');
    marcas.sort(); 
    let marcasOrdenadas = marcas.join('.');

    return {
        condiccionTesla,
        indiceChevrolet,
        marcasOrdenadas
    }; 
}

console.log(gestionarAutos(marcas));


