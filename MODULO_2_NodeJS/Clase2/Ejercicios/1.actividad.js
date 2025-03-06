// Crear un objeto JSON que represente un libro
let libro = {
    titulo: "La sangre manda",
    autor: "Stephen King",
    anio: 2019,
    genero: ["Suspenso", "Aventura"]
};


console.log("Título:", libro.titulo);
console.log("Autor:", libro.autor);


libro.anio = 2020;

libro.paginas = 460;

console.log("Libro actualizado:", libro);