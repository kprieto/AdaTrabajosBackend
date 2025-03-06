/*Ejercicio 2: Conversión de Objetos JavaScript a JSON  
1.En la misma carpeta clase2, crea un nuevo archivo llamado 
actividad2.js.  
2.Crea un objeto en JavaScript que represente a un estudiante con las 
siguientes propiedades: nombre, edad, curso, notas (un array de 
números). 
Instrucciones: 
• Convierte este objeto a una cadena JSON usando JSON.stringify(). 
• Muestra la cadena JSON en la consola. 
• Luego, convierte la cadena JSON de nuevo a un objeto utilizando 
JSON.parse() y muestra el objeto en la consola. */
// Crear un objeto en JavaScript que represente a un estudiante
let estudiante = {
    nombre: "Daniel Torres",
    edad: 22,
    curso: "Programación",
    notas: [90, 85, 88, 92]
};

let cadenaJSON = JSON.stringify(estudiante);

console.log("Cadena JSON:", cadenaJSON);

let objetoEstudiante = JSON.parse(cadenaJSON);

console.log("Objeto convertido:", objetoEstudiante);