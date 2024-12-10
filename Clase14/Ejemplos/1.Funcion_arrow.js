// Ejemplo 1 : Funcion normal (declarada)
function multiplicarPorDos (num){
    return num * 2;
}
console.log(multiplicarPorDos(5));

//Ejemplo2: Funcion Arrow (Expresada)
const multiplicarPorDosArrow = (num) => {
    return num * 2;
}

console.log(multiplicarPorDosArrow(5));

// Ejemplo 3: Funcion arrow (expresada) mas simple todavia
const multiplicarPorDosArrowSimple = (num) => num * 2;
console.log(multiplicarPorDosArrowSimple(5));
