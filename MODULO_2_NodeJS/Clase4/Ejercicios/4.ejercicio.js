/*Ejercicio 4: ¿Existe tu perfil?     
Consigna: 
Antes de hacer cualquier cosa, asegúrate de que tu archivo perfil.json 
existe. Si no existe, crea uno nuevo con un perfil básico. 
Pista: Usa fs.existsSync para verificar la existencia del archivo. */

const fs = require('fs');

const path = require('path');

const perfil ={
    nombre: 'Karen',
    edad: 35,
    ciudad: 'Ensenada'
}

const filePath = path.join(__dirname, 'perfil.json');

if (fs.existsSync(filePath)) {
    console.log(`El archivo o directorio "${filePath}" existe.`);
    fs.readFile('perfil.json', 'utf-8', function(err,data){
        if (!err){
            console.log('Perfil:')
            console.log(data);
        } else{
            throw err
        
        }
    })
} else {
    console.log(`El archivo o directorio "${filePath}" no existe.`);
    fs.writeFile('perfil.json', JSON.stringify(perfil, null, 2), 'utf8', (err) => {
        if (err) {
            console.error('Error al guardar el archivo:', err);
            return;
        }
        console.log("Perfil creado exitosamente, Revisa el archivo 'perfil.json'");


    });
}



