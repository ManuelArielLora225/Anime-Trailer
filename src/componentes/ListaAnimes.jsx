import React from "react";
import '../hojas-estilos/ListaAnimes.css'
import Anime from './Anime'
import { DatosAnimes } from '../data/DatosAnimes';
import { useContextoCategoria } from '../providers/ContextoCategorias'


 
const ListaAmimes = () => {

    const { categoriaSeleccionada } = useContextoCategoria();

    const AnimesFiltrados =  DatosAnimes.filter(anime => anime.categorias.includes(categoriaSeleccionada));

    return (
        <div className="contenedor-lista-animes">
            {AnimesFiltrados.map(anime => (
                <Anime 
                key={anime.id}
                titulo={anime.titulo}
                portada={anime.portada}
                idVideo={anime.idVideo}
                descripcion={anime.descripcion}
                categorias={anime.categorias}
                />
            ))}
        </div>
    )
}

export default ListaAmimes