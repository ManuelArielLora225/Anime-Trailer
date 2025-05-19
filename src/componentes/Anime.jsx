import React from 'react';
import '../hojas-estilos/Anime.css'
import { Link } from 'react-router-dom';




const Anime = ({id, titulo, portada, idVideo, descripcion, categorias, click}) => {


    return (
        
        <div className='anime-contenedor' onClick={click}>
            <Link to={`/${titulo}`}>
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
            </Link>
        </div>
        
    )
}

export default Anime;