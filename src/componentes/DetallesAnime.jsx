
import React from 'react';
import { useContextoDetalles } from "../providers/ContextoDetalle";
import EncabezadoDetalle from './EncabezadoDetalle';
import '../hojas-estilos/DetallesAnimes.css'

const DetallesAnime = () => {
    const {detalleAnime} = useContextoDetalles();
    const anime = detalleAnime[0];
    

    
    return(
        <>
        <EncabezadoDetalle />
        <div className='contenedor-detalle-anime'>
            <div className='contendor-portada'>
                <img className='portada' src={anime.portada} alt={anime.titulo}/>
            </div>
            <div className='contenedor-descripcion'>
                <h2 className='titulo'>{anime.titulo}</h2>
                <p className='descripcion'>{anime.descripcion}</p>
                <div className='categorias'>
                    {anime.categorias.map(categoria => (
                        <span>{categoria}</span>
                    ))}
                </div>
            </div>
        </div>
                    <div className='contenedor-trailer-youtube'>
                <iframe
                src={`https://www.youtube.com/emded/${anime.idVideo}`}
                title={anime.titulo}
                frameBorder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
                />
            </div>
        </>
    )
}

export default DetallesAnime;