const path = require('path');

// Ejemplo 1: Obtner el nombre del archivo desde una ruta absoluta
const rutaEntera = '/home/user/docs/file.txt';
const baseName1 = path.basename(rutaEntera);
console.log('Ejemplo1 - Nombre del archivo: ', baseName1);

// Ejemplo 2: Obtner el nombre si la extension
const baseName2 = path.basename(rutaEntera, '.txt');
console.log('Ejemplo2 - Nombre del archivo sin extension: ', baseName2);

// Ejemplo 3: Uso con rutas relativas
const rutaRelativa = 'src/utils/helpers.js';
const baseName3 = path.basename(rutaRelativa);
console.log('Ejemplo3 - Nombre del archivo desde una ruta relativa: ', baseName3);