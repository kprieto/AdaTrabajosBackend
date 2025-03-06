/*Actividad 5: Registro de contactos 
Consigna: Crea un programa que permita registrar contactos con 
nombre, teléfono y correo electrónico. El programa debe permitirte: 
1. Agregar un contacto: Registrar un nuevo contacto. 
2. Listar los contactos: Mostrar todos los contactos registrados. 
3. Eliminar un contacto: Eliminar un contacto de la lista. 
Pistas: 
• Usa un archivo JSON para guardar los contactos. 
• Si el archivo no existe, comienza con un arreglo vacío. */
const fs = require('fs');

const filePath = './contactos.json';


const leerContactos = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { contactos: [] };
    }
};


const escribirContactos = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const agregarContacto = (nombre, telefono, correo) => {
    const data = leerContactos();
    const nuevoContacto = {
        id: data.contactos.length + 1,
        nombre,
        telefono,
        correo
    };
    data.contactos.push(nuevoContacto);
    escribirContactos(data);
    console.log('Contacto agregado:', nuevoContacto);
};


const listarContactos = () => {
    const data = leerContactos();
    console.log('Lista de contactos registrados:', data.contactos);
};


const eliminarContacto = (id) => {
    const data = leerContactos();
    const index = data.contactos.findIndex(c => c.id === id);
    if (index !== -1) {
        const contactoEliminado = data.contactos.splice(index, 1);
        escribirContactos(data);
        console.log('Contacto eliminado:', contactoEliminado);
    } else {
        console.log('Contacto no encontrado:', id);
    }
};

// Ejemplos de uso
agregarContacto('Ana Karen', '646-163-43-36', 'karen@gmail.com');
agregarContacto('María Parra', '646-152-35-98', 'maria@gmail.com');
listarContactos();
eliminarContacto(1); 
listarContactos();