const path = require('path');

// ejemplo 1: Normalizacion de una ruta con barras redudantes y puntos de navegacion
const rawPath1 = '/home/user/docs/./file.txt';
const normalizePath1 = path.normalize(rawPath1);
console.log('Ejemplo 1 - Ruta normalizada: ');
console.log(normalizePath1);

// ejemplo 2: Normalizacion de una ruta con navegacion hacia arriba
const rawPath2 = '/home/user/docs/../images/file.jpg';
const normalizePath2 = path.normalize(rawPath2);
console.log('Ejemplo 2 - Ruta normalizada con navegacion hacia arriba: ');
console.log(normalizePath2);

// Ejemplo 3: Normalizacion de un ruta con multiples puntos de navegacion
const rawPath3 = '/home/user/docs/../../file.txt';
const normalizePath3 = path.normalize(rawPath3);
console.log('Ejemplo 3 - Ruta normalizada con multiples puntos: ');
console.log(normalizePath3);

