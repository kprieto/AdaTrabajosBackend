/*Ejercicio 7: Encuentra tu meta perdida     
Consigna: 
Revisa tu lista de metas en el archivo metas.json. Busca si una meta 
específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala. 
Pista: Usa fs.readFile para leer el archivo y un método como find para 
buscar en la lista. */
const fs = require('fs');

fs.readFile('metas.json', 'utf8', (err, data) => {
        if (err) {
        console.error('Error al leer el archivo:', err);
        return;
        }
    
        const jsonData = JSON.parse(data);
    
    
        const metaEncontrada = jsonData.find(meta => meta === "Viajar a Japón");
    
        if (!metaEncontrada) {
        
        jsonData.push("Viajar a Japón");
    
        
        fs.writeFile('metas.json', JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
            if (err) {
            console.error('Error al guardar el archivo:', err);
            return;
            }
            console.log('Meta "Viajar a Japón" agregada exitosamente');
        });
        } else {
        console.log('La meta "Viajar a Japón" ya está incluida en la lista');
        }
});