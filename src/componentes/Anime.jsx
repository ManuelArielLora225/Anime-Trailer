import React from 'react';
import '../hojas-estilos/Anime.css'

const Anime = ({id, titulo, portada, idVideo, descripcion, categorias}) => {
    return (
        <div className='contenedor-Anime'>
            <div className='contenedor-Portada'>
                <img  className="Portada" src={portada} />
            </div>
            <div className='contenedor-titulo'>
                <p className='contenedor-titulo'>{titulo}</p>
            </div>
        </div>
    )
}

export default Anime;