import React, { useState } from 'react';
import { useContextoDetalles } from "../providers/ContextoDetalle";
import EncabezadoDetalle from './EncabezadoDetalle';
import { useContextoFavoritos } from '../providers/ContextoFavoritos';
import '../hojas-estilos/DetallesAnimes.css';

const DetallesAnime = () => {
    const {detalleAnime} = useContextoDetalles();
    const anime = detalleAnime[0];

    const { listaFavorito, agregarListaFavorito, eliminarDeFavoritos } = useContextoFavoritos();

    const esFavorito = listaFavorito.some(favorito => favorito.id  === anime.id);

    const verificarFavorito = () => {
        if(esFavorito){
            eliminarDeFavoritos(anime.id)
        } else {
            agregarListaFavorito(anime)
        }
    }

    console.log(listaFavorito)
    



    
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
                    {anime.categorias.map((categoria, index) => (
                        <span key={index}>{categoria}</span>
                    ))}
                </div>
                <div className='contenedor-favorito'>
                    <button className='boton-favorito'
                    onClick={verificarFavorito}
                    >
                        {esFavorito ? '★ Quitar de Favoritos' :'☆ Añadir a Favoritos' }
                    </button>
                </div>
            </div>
        </div>
        <div className='contenedor-trailer-youtube'>
            <iframe
                src={`https://www.youtube.com/embed/${anime.idVideo}`}
                title={anime.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
        </>
    );
};

export default DetallesAnime;