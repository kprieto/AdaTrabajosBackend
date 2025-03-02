/*Ejercicio 5: ¡Despídete de tu perfil!   
Consigna: 
¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json. 
Verifica que el archivo existe antes de intentar borrarlo. 
Pista: Usa fs.unlink para eliminar archivos */

const fs = require('fs');


if (fs.existsSync('perfil.json')) {
    fs.unlink('perfil.json', (err) => {
        if (err) {
            console.error("No se pudo eliminar el perfil:", err);
        } else {
            console.log("¡Perfil eliminado exitosamente!");
        }
    });
} else {
    console.log("El archivo no existe");
}