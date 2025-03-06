/*Actividad 4: Control de inventario 
Consigna: Crea un programa para llevar el control de un inventario. El 
programa debe permitirte: 
1. Agregar un producto: Registrar un producto con su nombre y 
cantidad disponible. 
2. Listar los productos: Mostrar todos los productos registrados. 
3. Actualizar la cantidad de un producto: Modificar la cantidad de 
un producto en el inventario. 
Pistas: 
• Usa un archivo JSON para guardar los productos. 
• Si el archivo no existe, comienza con un arreglo vacío. 
• Cada producto debe tener un ID único que se pueda utilizar para 
actualizar su cantidad. */

const fs = require('fs');
const filePath = './inventario.json';


const leerInventario = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { productos: [] };
    }
};


const escribirInventario = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const agregarProducto = (nombre, cantidad) => {
    const data = leerInventario();
    const nuevoProducto = {
        id: data.productos.length + 1,
        nombre,
        cantidad
    };
    data.productos.push(nuevoProducto);
    escribirInventario(data);
    console.log('Producto agregado:', nuevoProducto);
};


const listarProductos = () => {
    const data = leerInventario();
    console.log('Todos los productos registrados:', data.productos);
};


const actualizarCantidad = (id, nuevaCantidad) => {
    const data = leerInventario();
    const producto = data.productos.find(p => p.id === id);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        escribirInventario(data);
        console.log('Cantidad actualizada:', producto);
    } else {
        console.log('Producto no encontrado:', id);
    }
};


agregarProducto('Teclado', 10);
agregarProducto('Ratón', 20);
listarProductos();
actualizarCantidad(1, 15); 
listarProductos();