import React from "react";
import Tarea from './Tarea'

const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {

    const toggleCompleted = (id) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, completada: !tarea.completada }
            }
            return tarea;
        }))
    }

    const editarTarea = (id, nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {
            if (tarea.id === id) {
                return { ...tarea, texto: nuevoTexto }
            }
            return tarea;
        }))
    }

    const borrarTarea = (id) => {
        cambiarTareas(tareas.filter((tarea) => {
            if (tarea.id !== id) {
                return tarea
            }
            return;
        }))
    }



    return (
        <ul className="lista-tareas">
            {tareas.length > 0 ? tareas.map((tarea) => {
                if (mostrarCompletadas) {
                    return <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        toggleCompleted={toggleCompleted}
                        editarTarea={editarTarea}
                        borrarTarea={borrarTarea}
                    />
                } else if(!tarea.completada){ 
                    return <Tarea
                        key={tarea.id}
                        tarea={tarea}
                        toggleCompleted={toggleCompleted}
                        editarTarea={editarTarea}
                        borrarTarea={borrarTarea}
                    />
                }
                return;
            }) :
                <div className="lista-tareas__mesanjes">No tiene tareas</div>
            }
        </ul>
    )


}

export default ListaTareas;