import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheckSquare, faEdit, faSquare, faTimes} from '@fortawesome/free-solid-svg-icons';

const Tareas = ({tarea, toggleCompleted, editarTarea, borrarTarea}) => {

    let [editandoTarea, setEditandoTarea] = useState(false);
    let [nuevaTarea, setNuevaTarea] = useState(tarea.texto);

    let handleSubmit = (e) => {
        e.preventDefault();
        editarTarea(tarea.id, nuevaTarea);
        setEditandoTarea(false);
    }

    return (

        <li className="lista-tareas__tarea" key={tarea.id}>
            <FontAwesomeIcon
                icon={tarea.completada ? faCheckSquare : faSquare}
                className="lista-tareas__icono lista-tareas__icono-check"
                onClick={() => toggleCompleted(tarea.id)}
            />

            <div className="lista-tareas__texto">
                {editandoTarea ?
                <form action="" className="formulario-editar-tarea" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="formulario-editar-tarea__input"
                        value={nuevaTarea}
                        onChange={(e) => setNuevaTarea(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="formulario-editar-tarea__btn"
                    >
                        Actualizar
                    </button>
                </form>
                : tarea.texto
                }
            </div> 

            <div className="lista-tareas__contenedor-botones">
                <FontAwesomeIcon
                    icon={faEdit}
                    className="lista-tareas__icono lista-tareas__icon-accion"
                    onClick={() => setEditandoTarea(!editandoTarea)}
                />

                <FontAwesomeIcon
                    icon={faTimes}
                    className="lista-tareas__icono lista-tareas__icon-accion"
                    onClick={() => borrarTarea(tarea.id)}
                />
            </div>
        </li>

     );
}

export default Tareas;