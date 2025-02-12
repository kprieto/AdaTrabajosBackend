const path = require('path');

// Ejemplo 1: Obtner la extension de un archivo desde una ruta absoluta
const filePath = '/home/user/docs/file.txt';
const ejemplo1 = path.extname(filePath);
console.log('Ejemplo 1 - Extension del archivo (Absoluta): ', ejemplo1);

// Ejemplo 2: Obtener extension de un archivo desde una ruta relativa
const relativePath = 'src/utils/helpers.js';
const ejemplo2 = path.extname(relativePath);
console.log('Ejemplo 2 - Extension del archivo (Relativa): ', ejemplo2);

// ejemplo 3: Manejo de archivos sin extension
const noExtPath = '/home/user/docs/README';
const ejemplo3 = path.extname(noExtPath);
console.log('Ejemplo 3 - Extension del archivo sin extension: ', ejemplo3);
