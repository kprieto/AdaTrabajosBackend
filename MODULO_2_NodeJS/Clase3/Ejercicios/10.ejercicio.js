/*Actividad 10: Gestión de compras 
Consigna: Crea un programa que registre las compras realizadas. El 
programa debe permitirte: 
1. Agregar una compra: Registrar una compra con su nombre y 
precio. 
2. Listar las compras: Mostrar todas las compras registradas. 
3. Eliminar una compra: Eliminar una compra de la lista. 
Pistas: 
• Usa un archivo JSON para guardar las compras. 
• Si el archivo no existe, comienza con un arreglo vacío. 
• Cada compra debe tener un ID único. */
const fs = require('fs');
const filePath = './compras.json';


const leerCompras = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { compras: [] };
    }
};


const escribirCompras = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};

// Agregar una compra
const agregarCompra = (nombre, precio) => {
    const data = leerCompras();
    const nuevaCompra = {
        id: data.compras.length + 1,
        nombre,
        precio
    };
    data.compras.push(nuevaCompra);
    escribirCompras(data);
    console.log('Compra agregada:', nuevaCompra);
};


const listarCompras = () => {
    const data = leerCompras();
    console.log('Listado de compras registradas:', data.compras);
};


const eliminarCompra = (id) => {
    const data = leerCompras();
    const index = data.compras.findIndex(c => c.id === id);
    if (index !== -1) {
        const compraEliminada = data.compras.splice(index, 1);
        escribirCompras(data);
        console.log('Compra eliminada:', compraEliminada);
    } else {
        console.log('Compra no encontrada:', id);
    }
};

agregarCompra('Computadora', 1500);
agregarCompra('Bicicleta', 800);
listarCompras();
eliminarCompra(1); 
listarCompras();