/*Ejercicio 2: El menú del día 🍽️ 
Escribe una función que reciba un objeto con platos y precios, y devuelva 
los platos cuyo precio sea menor a $20. 
Consigna: 
• Usa un bucle for...in. 
• Usa objetos y arrays. */
function obtenerPlatosEconomicos(menu) {
        let platosEconomicos = [];
        

        for (let plato in menu) {
        
        if (menu[plato] < 20) {
            
            platosEconomicos.push(plato);
        }
        }
    
    return platosEconomicos;
}


const menuDelDia = {
    "Ensalada César": 15,
    "Hamburguesa": 25,
    "Sopa": 12,
    "Pizza": 18,
    "Carne": 30
};

const platosEconomicos = obtenerPlatosEconomicos(menuDelDia);
console.log("Platos económicos (menos de $20):", platosEconomicos);