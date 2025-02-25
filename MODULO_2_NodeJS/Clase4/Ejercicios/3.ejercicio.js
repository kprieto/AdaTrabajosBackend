/*Ejercicio 3: ¡Actualiza tu estilo!     
Consigna: 
¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar 
tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios 
en el archivo perfil.json. 
Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a 
escribirlo. */

const fs = require('fs');
const path = require('path');

fs.readFile('perfil.json', 'utf-8', function(err,data){
    if (!err){
        console.log(data);
        let perfil = JSON.parse(data);

        perfil.hobby = 'Hacer senderismo';

        let perfilActualizado = JSON.stringify(perfil, null, 2);

        
        fs.writeFile('perfil.json', perfilActualizado, 'utf8', (err) => {
            if (err) {
                console.error('Error al guardar el archivo:', err);
                return;
            }
            console.log('El perfil se ha actualizado con éxito.');
            fs.readFile('perfil.json', 'utf8', (err, dataActualizada) => {
                if (!err) {
                    console.log('Perfil actualizado:');
                    console.log(dataActualizada);
                } else {
                    console.error('Error al leer el archivo actualizado:', err);
                }
            
            });
        });

    } else{
        throw err
    
    }
})

