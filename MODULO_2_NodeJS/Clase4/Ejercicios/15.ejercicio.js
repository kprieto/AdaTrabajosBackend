/*Ejercicio 15: Historial de actividades deportivas                     
Consigna: 
Crea un programa para registrar actividades deportivas en un archivo 
actividades.json. Debe incluir: 
1. Registrar una actividad con tipo (correr, nadar), duración (en 
minutos) y fecha. 
2. Mostrar todas las actividades realizadas. 
3. Filtrar actividades por tipo (por ejemplo, solo mostrar las de 
"correr"). 
Pista: Usa Date.now() para obtener la fecha exacta. */
const fs = require('fs');

const leerActividades = () => {
    try {
        const data = fs.readFileSync('actividades.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
        return { actividades: [] };
    }
};


const escribirActividades = (data) => {
    try {
        fs.writeFileSync('actividades.json', JSON.stringify(data, null, 2), 'utf8');
        console.log('Datos guardados exitosamente');
    } catch (err) {
        console.error('Error al guardar el archivo:', err);
    }
};


const registrarActividad = (tipo, duracion) => {
    const data = leerActividades();
    const nuevaActividad = {
        tipo,
        duracion,
        fecha: new Date(Date.now()).toISOString()
    };
    data.actividades.push(nuevaActividad);
    escribirActividades(data);
    console.log('Actividad registrada:', nuevaActividad);
};


const mostrarActividades = () => {
    const data = leerActividades();
    console.log('Todas las actividades realizadas:', data.actividades);
};


const filtrarActividadesPorTipo = (tipo) => {
    const data = leerActividades();
    const actividadesFiltradas = data.actividades.filter(actividad => actividad.tipo === tipo);
    console.log(`Actividades de tipo "${tipo}":`, actividadesFiltradas);
};


registrarActividad('correr', 30);
registrarActividad('nadar', 45);
mostrarActividades();
filtrarActividadesPorTipo('correr');