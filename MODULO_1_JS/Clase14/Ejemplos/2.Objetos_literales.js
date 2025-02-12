// Definimos un objeto literal
const auto ={
    // Propiedades normales
    marca : "Toyota",
    modelo : "Corolla",
    anio : 2022,
    color : "Negro",
    //Metodo
    describir : function () {
        return `Este auto es un ${this.marca} ${this.modelo} del anio ${this.anio} y de color ${this.color}`;
    }
}
// Ejecucion del metodo
console.log(auto.describir());

//Acceder a las propiedades una por una
console.log(auto.marca);
console.log(auto.modelo);
console.log(auto.anio);
console.log(auto.color);





/*
Estructura del Objeto Literal
variable nombreObjeto = {
    propiedad1 : valor1,
    propiedad2 : valor2,
    propiedad3 : valor3,
    nombreMetodo: function (){
    return logica
    }
}
*/
