import React from 'react';
import { useContextoDetalles } from "../providers/ContextoDetalle";


const DetallesAnime = () => {

     const {detalleAnime} = useContextoDetalles();

     const anime = detalleAnime.map(anime => anime)

    return(
        <div className='contenedor-detalle-anime'>
            <div className='contendor-portada'>
                <img className='portada' src={anime.portada}/>
            </div>
            <div className='contenedor-descripcion'>
                <h2 className='titulo'>{anime.titulo}</h2>
                <p className='descripcion'>{anime.descripcion}</p>
                <p className='categorias'>{anime.categorias}</p>
            </div>
        </div>
    )
    
}

export default DetallesAnime