/*Ejercicio 9: Filtra tus metas completas    
Consigna: 
Supongamos que cada meta tiene un estado: “completa” o “pendiente”. 
Filtra las metas que ya completaste y muéstralas en la consola. 
Pista: Modifica las metas para que sean objetos con un atributo 
estado. Usa el método filter para obtener las completas. */
const fs = require('fs');



fs.readFile('metas.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }

    const jsonData = JSON.parse(data);


    const metasCompletas = jsonData.filter(meta => meta.estado === "completa");


    console.log('Metas completas:', metasCompletas);
});