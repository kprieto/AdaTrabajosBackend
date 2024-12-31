/*Ejercicio 7: “La Floreria” 
Escribe una función "gestionarFloreria" que realice las siguientes tareas 
con una lista predefinida de nombres de flores: 
1. Quite los espacios en blanco alrededor de cada flor. 
2. Verifique si existe la flor "Margarita" y, si está presente, agregue 
"Azucena" al final de la lista. 
3. Reemplace todas las flores "Orquídea" por "Clavel". 
4. Encuentre el índice de la flor "Girasol" y, si no está presente, agregue 
"Girasol" al inicio de la lista. 
Devuelva una cadena de flores en orden alfabético separadas por puntos.*/

let flores= "Rosa, Tulipán, Orquídea, Lirio";

function gestionarFloreria(cadenaFlores) {
    let flores = cadenaFlores.split(',').map(flor => flor.trim());
    if (flores.includes('Margarita')) { 
        flores.push('Azucena'); 
    } else {
        console.log("No existe la flor Margarita en la cadena.");
    }
    flores = flores.map(flor => flor === 'Orquídea' ? 'Clavel' : flor);
    let indiceGirasol = flores.indexOf('Girasol'); 
    if (indiceGirasol === -1) { 
        flores.unshift('Girasol'); 
    } else {
        console.log("Ya existe la flor Girasol en la cadena.");

    }
    flores.sort(); 
    let floresOrdenadas = flores.join('.');
    return floresOrdenadas;
}

console.log(gestionarFloreria(flores));
