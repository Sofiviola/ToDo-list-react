import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import './../App.css'

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
    
    const toggleCompletadas = () => {
        cambiarMostrarCompletadas(!mostrarCompletadas);
    }

    return (
        <header className='header'>
            <h1 className='header__titulo'>Lista de Tareas</h1>
            {mostrarCompletadas ?
                <button
                    className='header__boton'
                    onClick={() => toggleCompletadas()}
                >
                    No mostrar tareas completadas
                    <FontAwesomeIcon icon={faEyeSlash} className='header__icon-boton' />
                </button>
                :
                <button
                    className='header__boton'
                    onClick={() => toggleCompletadas()}
                >
                    Mostrar tareas completadas
                    <FontAwesomeIcon icon={faEye} className='header__icon-boton' />
                </button>
            }

        </header>
    )
}

export default Header;