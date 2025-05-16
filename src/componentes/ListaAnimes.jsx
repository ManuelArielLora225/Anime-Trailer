import React from 'react'
import '../hojas-estilos/ListaAnime.css'
import { DatosAnimes } from '../data/DatosAnimes'
import Anime from './Anime'
import { useContextoCategorias } from '../providers/ProvidersCategorias'

const ListaAnimes = () => {

    const { categoriaSeleccionada } = useContextoCategorias();

    const animesFiltrados = DatosAnimes.filter(anime => anime.categorias.includes(categoriaSeleccionada))

    return(

        <div className='contenedor-lista-animes' >

        {animesFiltrados.map(anime => (
            <Anime 
            key={anime.id}
            id={anime.id}
            portada={anime.portada}
            idVideo={anime.idVideo}
            descripcion={anime.descripcion}
            categorias={anime.categorias}
            />
        ))}
    
        </div>
    )
    
}

export default ListaAnimes