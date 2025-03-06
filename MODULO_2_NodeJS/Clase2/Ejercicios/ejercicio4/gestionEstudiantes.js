/*Ejercicio 4: Gestión de Estudiantes 
Instrucciones 
1. Dentro de la carpeta clase2/ejercicio4, crea dos archivos: 
o estudiantes.js 
o gestionEstudiantes.js 
2. En estudiantes.js: 
o Crea un array de objetos que represente una lista de 
estudiantes. 
o Cada estudiante debe tener las propiedades: nombre, edad, 
curso y notas (un array de números). 
o Exporta este array usando module.exports. 
3. En gestionEstudiantes.js: 
o Importa el array desde estudiantes.js. 
o Muestra en la consola los nombres de todos los estudiantes. 
o Calcula y muestra el promedio de notas de un estudiante 
específico. 
o Agrega un nuevo estudiante al array y muestra el array 
actualizado en formato JSON. */

const estudiantes = require('./estudiantes');


console.log("Nombres de todos los estudiantes:");
estudiantes.forEach(estudiante => {
    console.log(estudiante.nombre);
});


const calcularPromedio = (notas) => {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
};

const nombreEstudiante = "Laura Flores"; 
const estudiante = estudiantes.find(est => est.nombre === nombreEstudiante);

if (estudiante) {
    const promedio = calcularPromedio(estudiante.notas);
    console.log(`Promedio de notas de ${nombreEstudiante}:`, promedio);
    } else {
    console.log(`Estudiante ${nombreEstudiante} no encontrado.`);
}


const nuevoEstudiante = {
    nombre: "Carlos Martínez",
    edad: 23,
    curso: "Química",
    notas: [85, 88, 90]
};

estudiantes.push(nuevoEstudiante);

console.log("Lista actualizada de estudiantes en formato JSON:");
console.log(JSON.stringify(estudiantes, null, 2));