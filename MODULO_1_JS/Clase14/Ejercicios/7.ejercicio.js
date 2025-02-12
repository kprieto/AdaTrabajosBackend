/*Ejercicio 7: Libros 
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: 
✓ título: una cadena con el título del libro. 
✓ autor: una cadena con el nombre del autor del libro. 
✓ anioPublicacion: un número con el año de publicación del libro. 
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado. */

const libro1 = {
    titulo : "Cien años de soledad",
    autor : "Gabriel García Márquez",
    anioPublicacion : 1967 
}

const libro2 = {
    titulo : "El visitante",
    autor : "Stephen King",
    anioPublicacion : 2018
}

function mostrarLibro (libro){
    return `Libro ${libro.titulo} del Autor ${libro.autor} fue publicado en el año ${libro.anioPublicacion}`;
    
}

console.log("--- Mostrar Libro ---");
console.log(mostrarLibro(libro1));
console.log("--- Mostrar Libro ---");
console.log(mostrarLibro(libro2));
