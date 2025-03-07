/*Ejercicio 5: Aplicación de Notas con Módulo Path y FS 
Consigna: 
Crea una aplicación de notas donde cada nota se guarde en un archivo 
de texto dentro de una carpeta específica. Usa el módulo path para 
manejar rutas y fs para crear y leer archivos. 
Pasos: 
• Usa path.join para crear rutas dinámicas a la carpeta de notas. 
• Usa fs para crear, leer y eliminar archivos de notas. 
• Implementa un menú interactivo con readline-sync.*/
const fs = require('fs');
const path = require('path');
const readlineSync = require('readline-sync');

const notasPath = path.join(__dirname, 'notas');


if (!fs.existsSync(notasPath)) {
    fs.mkdirSync(notasPath);
}


const crearNota = (titulo, contenido) => {
    const filePath = path.join(notasPath, `${titulo}.txt`);
    fs.writeFileSync(filePath, contenido, 'utf8');
    console.log('Nota creada:', titulo);
};


const leerNota = (titulo) => {
    const filePath = path.join(notasPath, `${titulo}.txt`);
    if (fs.existsSync(filePath)) {
        const contenido = fs.readFileSync(filePath, 'utf8');
        console.log('Contenido de la nota:', contenido);
    } else {
        console.log('La nota no existe:', titulo);
    }
};


const eliminarNota = (titulo) => {
    const filePath = path.join(notasPath, `${titulo}.txt`);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log('Nota eliminada:', titulo);
    } else {
        console.log('La nota no existe:', titulo);
    }
};


const menu = () => {
console.log('\nGestor de Notas');
console.log('1. Crear nota');
console.log('2. Leer nota');
console.log('3. Eliminar nota');
console.log('4. Salir');

const opcion = readlineSync.question('Elige una opción: ');

switch (opcion) {
        case '1':
        const tituloCrear = readlineSync.question('Título de la nota: ');
        const contenido = readlineSync.question('Contenido de la nota: ');
        crearNota(tituloCrear, contenido);
        break;
        case '2':
        const tituloLeer = readlineSync.question('Título de la nota: ');
        leerNota(tituloLeer);
        break;
        case '3':
        const tituloEliminar = readlineSync.question('Título de la nota: ');
        eliminarNota(tituloEliminar);
        break;
        case '4':
        console.log('Gracias por su visita!');
        process.exit();
        break;
        default:
        console.log('Opción no válida.');
    }
};


while (true) {
    menu();
}