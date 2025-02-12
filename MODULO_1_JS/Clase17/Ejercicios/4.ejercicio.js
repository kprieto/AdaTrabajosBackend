/*Ejercicio 4: Transformación y Análisis de Cadenas 
Pide al usuario que ingrese una lista de nombres separados por comas. 
Los nombres a ingresar deben ser “Julian”, “Maria”, “Malena”, “Andrea”, 
“Pablo” y “Pedro”. 
Luego, escribe la función “transformarYAnalizarNombres”que realice las 
siguientes tareas: 
1. Quite los espacios en blanco alrededor de cada nombre. 
2. Verifique si existe el nombre "Juan". 
3. Reemplace todos los nombres "María" por "Ana". 
4. Encuentre el índice del nombre "Pedro". 
5. Devuelva una cadena de nombres en orden alfabético separados 
por puntos. Investigar el método “.sort()” 
https://developer.mozilla.org/en
US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */

const prompt = require('prompt-sync')();

let nombres = prompt("Introduce los siguientes nombres separados por coma(,) (Julian, Maria, Malena, Andrea, Pablo, Pedro): ");

function transformarYAnalizarNombres(nombres) { 
    let cNombres = nombres.split(',').map(nombre => nombre.trim());
    let existeJuan = cNombres.includes('Juan');
    let condiccionJuan = existeJuan === true ? "Si existe." : "No existe.";
    cNombres = cNombres.map(nombre => nombre === 'Maria' ? 'Ana' : nombre);
    let indicePedro = cNombres.indexOf('Pedro');
    cNombres.sort(); 
    let nombresOrdenados = cNombres.join('.');
    return { 
        condiccionJuan, 
        indicePedro, 
        nombresOrdenados };

}

console.log(transformarYAnalizarNombres(nombres));
