/*Ejercicio 8: Cuenta tus metas        
Consigna: 
¿Sabes cuántas metas has establecido? Escribe un programa que lea tu 
archivo metas.json y cuente cuántas metas tienes actualmente. 
Pista: Usa length para obtener la cantidad de elementos en la lista. */
const fs = require('fs');


fs.readFile('metas.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const jsonData = JSON.parse(data);


    const totalMetas = jsonData.length;
    console.log('Cantidad de metas:', totalMetas);
});