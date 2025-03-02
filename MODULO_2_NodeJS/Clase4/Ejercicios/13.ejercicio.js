/*Ejercicio 13: Inventario de productos      
Consigna: 
Crea un programa para manejar un archivo inventario.json. Debes: 
1. Agregar productos al inventario con nombre, cantidad y precio. 
2. Actualizar la cantidad de un producto existente. 
3. Calcular el valor total del inventario. 
Pista: Usa un ciclo para calcular el valor total. */

const fs = require('fs');



const leerInventario = () => {
    try {
        const data = fs.readFileSync('inventario.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { productos: [] };
    }
};


const escribirInventario = (data) => {
    try {
        fs.writeFileSync('inventario.json', JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const agregarProducto = (nombre, cantidad, precio) => {
    const data = leerInventario();
    const nuevoProducto = { nombre, cantidad, precio };
    data.productos.push(nuevoProducto);
    escribirInventario(data);
    console.log('Producto agregado:', nuevoProducto);
};


const actualizarCantidad = (nombre, nuevaCantidad) => {
    const data = leerInventario();
    const producto = data.productos.find(p => p.nombre === nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        escribirInventario(data);
        console.log('Cantidad actualizada:', producto);
    } else {
        console.log('Producto no encontrado:', nombre);
    }
};


const calcularValorTotal = () => {
    const data = leerInventario();
    let valorTotal = 0;
    data.productos.forEach(producto => {
        valorTotal += producto.cantidad * producto.precio;
    });
    console.log('Valor total del inventario:', valorTotal);
};


agregarProducto('Laptop', 10, 1000);
agregarProducto('Teléfono', 20, 500);
actualizarCantidad('Laptop', 15);
calcularValorTotal();