/*Ejercicio 2: Menú Interactivo con readline-sync 
Crea un script de Node.js que muestre un menú de opciones usando 
readline-sync. El menú debe permitir al usuario elegir entre tres acciones: 
ver un mensaje de bienvenida, generar un hash de un texto, o salir. */
const readlineSync = require('readline-sync');
const crypto = require('crypto');


console.log("\nMenú de Opciones:");
const opciones = ['Ver mensaje de bienvenida', 'Generar hash de un texto', 'Salir'];
const indiceSeleccionado = readlineSync.keyInSelect(opciones, 'Elige una opcion')

switch (indiceSeleccionado) {
    case 0:
    console.log("¡Bienvenido!");
        break;
    case 1:
        const texto = readlineSync.question('Ingresa el texto para generar su hash: ');
        const hash = crypto.createHash('sha256').update(texto).digest('hex');
        console.log(`El hash del texto "${texto}" es: ${hash}`);
        break;
    case 2:
        console.log("¡Hasta luego!. Gracias por visitarnos.");
        break;
    default:
        console.log("Opción no válida. Inténtalo de nuevo.");
        break;
}