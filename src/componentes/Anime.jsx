import React from 'react';
import '../hojas-estilos/Anime.css'


const Anime = ({id, titulo, portada, idVideo, descripcion, categorias, click}) => {


    return (
        <div className='anime-contenedor' onClick={click}>
            <div className='anime-portada-contenedor'>
                <img 
                 className="anime-portada" 
                 src={portada} 
                 alt={`Portada de ${titulo}`}
                 />
            </div>
            <div className='anime-info'>
                <div className='anime-titulo'>{titulo}</div>
            </div>
        </div>
    )
}

export default Anime;