// Ejercicio 7 - Intercambio de Valores: Declara dos variables con valores 
// iniciales y luego intercambia sus valores. Muestra los valores antes y 
// después del intercambio en la consola. 
// Para intercambiar valores puedes usar varios métodos(usando una 
// variable temporal, aritmética o asignación simultanea), eres libre de 
// elegir el que desees, eso si, investiga sobre el que usaras.

let dato1 = "Aprendiendo programación.";
let dato2 = "Aprendiendo lógica."
console.log(`Dato1: ${dato1} y Dato2: ${dato2}`);

let temporal = dato1;
dato1 = dato2;
dato2 = temporal;

console.log(`Dato1: ${dato1} y Dato2: ${dato2}`);


