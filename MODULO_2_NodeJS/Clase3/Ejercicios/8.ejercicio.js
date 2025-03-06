/*Actividad 8: Seguimiento de proyectos 
Consigna: Crea un programa para gestionar proyectos. El programa debe 
permitirte: 
1. Agregar un proyecto: Registrar un proyecto con su nombre y 
estado (pendiente o en progreso). 
2. Listar los proyectos: Mostrar todos los proyectos registrados. 
3. Actualizar el estado de un proyecto: Cambiar el estado de un 
proyecto a "finalizado" o "en progreso". 
Pistas: 
• Usa un archivo JSON para guardar los proyectos. 
• Si el archivo no existe, comienza con un arreglo vacío. 
• Cada proyecto debe tener un ID único. */
const fs = require('fs');
const filePath = './proyectos.json';


const leerProyectos = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { proyectos: [] };
    }
};


const escribirProyectos = (data) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const agregarProyecto = (nombre, estado = 'pendiente') => {
    const data = leerProyectos();
    const nuevoProyecto = {
        id: data.proyectos.length + 1,
        nombre,
        estado
    };
    data.proyectos.push(nuevoProyecto);
    escribirProyectos(data);
    console.log('Proyecto agregado:', nuevoProyecto);
};


const listarProyectos = () => {
    const data = leerProyectos();
    console.log('Listado de los proyectos registrados:', data.proyectos);
};


const actualizarEstadoProyecto = (id, nuevoEstado) => {
    const data = leerProyectos();
    const proyecto = data.proyectos.find(p => p.id === id);
    if (proyecto) {
        proyecto.estado = nuevoEstado;
        escribirProyectos(data);
        console.log('Estado del proyecto actualizado:', proyecto);
    } else {
        console.log('Proyecto no encontrado:', id);
    }
};


agregarProyecto('Desarrollar sitio web');
agregarProyecto('Implementar API', 'en progreso');
listarProyectos();
actualizarEstadoProyecto(1, 'finalizado'); 
listarProyectos();