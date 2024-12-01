// Ejercicio 9: Última aparición de un modelo de auto 
// Se está realizando el desarrollo de una aplicación para control de 
// gastos. Cada día, el usuario ingresa sus gastos cotidianos. 
// La idea es solo registrar el total de los gastos, al finalizar la jornada. 
// Para simplificar, vamos a considerar que todos los meses tienen cuatro 
// semanas. 
// Los gastos estarán en una matriz de 4x7, cada fila representa una 
// semana y cada columna un día. Es decir, fila 0, semana 1, fila 1, semana 
// 2, etc. Columna 0, día 1, columna 1, día 2, etcétera.  
// a) Lo que nos solicitan es dar el total de gastos en una semana. 
// Recordemos que cada fila representa una semana, es decir, si nos 
// indican semana 2 tenemos que sumar la fila 1 de la matriz. Recordar 
// que las matrices comienzan siempre en posición 0.  
// b) La aplicación también tendrá una parte de estadísticas, para esto 
// nos solicitan dar el total de un día en particular, por ejemplo del día 
// 3, acá también tengamos en cuenta lo que ocurre con las filas, ya 
// que las columnas también comienzan en 0. 
// c) Por último, es necesario tener el total de gastos realizados en el 
// mes. 
// ✓ Pregunta para pensar, ¿es lo mismo recorrer por filas o por 
// columnas para resolver este último punto? 
// d) Obtener cuál fue la semana que más gastos se realizaron. Indicar el 
// día que más gastos se realizaron. 
// ✓ Posibles matrices para comprobar los resultados.
const prompt = require("prompt-sync")({ sigint: true });

let matriz = [ 
    [1135,2500,900,1600,2800,3650,1100],
    [1750,1890,1900,1600,898,1750,2800],
    [1700,1150,1690,1900,1770,4500,2560],
    [800,1250,1430,2100,1980,1270,950]
]

let semana = parseInt(prompt("Introduce un numero de semana 1 al 4: "))
let suma = 0;
for (let fila =0; fila < matriz[semana-1].length; fila++){
    suma += matriz[semana-1][fila];
}
console.log(`Total de gastos de la semana ${semana} es: ${suma}`);

let dia = parseInt(prompt(`Introduce un numero de dia del 1 al 7 de la semana ${semana} : `));
let gastoDia = matriz[semana-1][dia-1];

console.log(`Total de gastos del dia ${dia} de la semana ${semana} es: ${gastoDia}`);
let gastoMes = 0;
for (let fila = 0; fila < matriz.length; fila++){
    for (let col = 0; col < matriz[fila].length; col++){
        
        gastoMes += matriz[fila][col];
    
    }
}
console.log(`Total de gastos del mes: ${gastoMes}`);
let gastosSemana = 0;
let semanaMaxima = -1;

for (let fila = 0; fila < matriz.length; fila++) {
    let sumaSemana = 0;
    for (let col = 0; col < matriz[fila].length; col++) {
        sumaSemana += matriz[fila][col];
    }
    if (sumaSemana > gastosSemana) {
        gastosSemana = sumaSemana;
        semanaMaxima = fila + 1; 
    }
}
console.log(`La semana con más gastos fue la semana ${semanaMaxima} con un total de ${gastosSemana}.`);

let gastoDiaM = 0;
let diaMaximo = -1;

for (let fila = 0; fila < matriz.length; fila++) {
    for (let col = 0; col < matriz[fila].length; col++) {
        if (matriz[fila][col] > gastoDiaM) {
            gastoDiaM = matriz[fila][col];
            diaMaximo = col + 1;
        }
    }
}


console.log(`El día con más gastos fue el día ${diaMaximo} con un gasto de ${gastoDiaM}.`);


