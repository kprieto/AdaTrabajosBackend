const readFileSync = require('readline-sync')

// funcion para mostrar todas las tareas
function displayTasks(tasks){
    if (readTasks.length === 0 ){
        console.log('No hay tareas');
        
    } else {
        console.log('Tareas: ');
        readTasks.forEach((task, index) =>{
            console.log(`${index + 1}. ${task.description} - ${task.completed ? 'Completada' : 'Pendiente'}`);
            
        })
        
    }
}
//funcion para pedir al usuari la descripcion de la tarea nueva
function prompForTask(){
    return readFileSync.question('Ingrese la descripcion de la tarea: ')
}
// funcion para al usuario el id de una tarea a eliminar
function prompForTaskId(){
    const taskId = readlineSync.question('Ingrese el numero de la tarea a eliminar: ') -1
    if(taskId < 0 || taskId >= tasks.length){
        console.log('Tarea no valida');
        return -1;
        
    }
}

// funcion para mostrar un mensaje de confirmacion
function confirmationMessage(message){
    console.log(message);
    
}
// exportaciones
module.exports = {displayTasks, prompForTask, prompForTaskId,confirmationMessage}