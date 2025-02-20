/*Ejercicio 2: Leer y Modificar un Archivo JSON 
Objetivo: Leer datos de un archivo JSON, modificarlos y guardarlos 
nuevamente. 
Instrucciones: 
• Crea un archivo llamado data.json con el siguiente contenido: 
• Crea un archivo llamado exercise2.js. 
• Lee el archivo data.json, modifica el campo age a un nuevo valor, y 
guarda el archivo modificado. */
const fs = require('fs');

fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    let persona = JSON.parse(data);

    persona.edad = 35;

    let personaCadena = JSON.stringify(persona, null, 2);

    fs.writeFile('data.json', personaCadena, 'utf8', (err) => {
        if (err) {
            console.log('Error al guardar el archivo:', err);
            return;
        }
        console.log('El archivo se ha actualizado con éxito.');
        console.log(personaCadena);
        
    });
});