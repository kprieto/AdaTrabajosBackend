/*Actividad 1: Registro de libros favoritos 
Consigna: ¡Hola! Hoy serás una bibliotecaria digital. Debes crear un 
programa que permita registrar libros favoritos en un archivo JSON. 
Implementa las siguientes funciones: 
1. Agregar un libro: Se debe agregar un libro a la lista de favoritos. 
Para esto, el libro tendrá solo un campo: su nombre. 
2. Listar los libros: Muestra todos los libros registrados. 
Pistas: 
• Usa un archivo JSON para guardar los libros. 
• Si el archivo no existe, comienza con un arreglo vacío. */
// PASO 1: IMPORTACION
const fs = require('fs');

const filePath = './libros.json';


//PASO2: funcion para leer los libros
const leerLibros = () =>{
    // si el archivo no existe, creamos un archivo vacio con un arreglo
    if(!fs.existsSync(filePath)){
        fs.writeFileSync(filePath, '[]')
    }

    const contenido = fs.readFileSync(filePath, 'utf-8'); // leemos el achivo
    return JSON.parse(contenido); // convertimos el continido a un arreglo de libros
}

// PASO 3: funcion para escribir los libros en el archivo JSON
const escribirLibros = (libros) => {
    fs.writeFileSync(filePath, JSON.stringify(libros, null, 2))
}

//PASO 4: Funcion para agregar un libro
const agregarLibro = (nombreLibro) =>{
    const libros = leerLibros(); // leer los libros existentes
    libros.push({id: libros.length + 1, nombre: nombreLibro}) // agregamos un nuevo libro
    escribirLibros(libros) //guardar la lista actualizada
    console.log(`Libro agregado: "${nombreLibro}"`);
    
}

//PASO 5: Listar los libros
const listarLibros = () =>{
    const libros = leerLibros(); // Leemos los libros
    console.log("Lista de libros favoritos: ");
    libros.forEach(libro => {
        console.log(`${libro.id}. ${libro.nombre}`)
    });
    
}

//PASO 6: ejemplo de uso de las funciones
agregarLibro("El principito");
listarLibros()
agregarLibro("Cien años de soledad");
agregarLibro("El visitante");
listarLibros();