/*Ejercicio 6: Tu lista de metas        
Consigna: 
Es momento de planear tus metas. Crea un archivo llamado metas.json 
con una lista vacía al principio. Luego, agrega metas como: “Aprender 
Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo. 
Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la 
lista. */
const fs = require('fs');

let metas = [];

metas.push("Aprender Node.js");
metas.push("Viajar a Japón");


fs.writeFile('metas.json', JSON.stringify(metas, null, 2), (err) => {
    if (err) {
        console.error("Error al crear tu lista de metas:", err);
    } else {
        console.log("¡Metas creadas con éxito! ");
    }
});
