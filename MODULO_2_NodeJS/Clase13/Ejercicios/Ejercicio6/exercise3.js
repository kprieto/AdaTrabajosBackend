/*Ejercicio 3: Convertir Datos JSON a un Objeto y Acceder a sus 
Propiedades 
Objetivo: Convertir una cadena JSON a un objeto y acceder a sus 
propiedades. 
Instrucciones: 
• Crea un archivo llamado exercise3.js. 
• Define una cadena JSON que represente a un libro (incluye 
campos como title, author, y year). 
• Convierte la cadena JSON a un objeto y muestra cada 
propiedad en la consola. */


const libroJSON = '{"titulo": "Cien Años de Soledad", "autor": "Gabriel García Márquez", "anio": 1967}';


const libro = JSON.parse(libroJSON);


console.log(`Título: ${libro.titulo}`);
console.log(`Autor: ${libro.autor}`);
console.log(`Año: ${libro.anio}`);