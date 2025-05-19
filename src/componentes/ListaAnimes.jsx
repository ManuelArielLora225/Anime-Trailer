import React from "react";
import '../hojas-estilos/ListaAnimes.css'
import Anime from './Anime'
import { DatosAnimes } from '../data/DatosAnimes';
import { useContextoCategoria } from '../providers/ContextoCategorias'
import { useContextoDetalles } from "../providers/ContextoDetalle";


 
const ListaAmimes = () => {

    const { categoriaSeleccionada } = useContextoCategoria();

    
        const {setDetalleAnime} = useContextoDetalles();
    
        const agegarAnime = (anime) => {
            setDetalleAnime([anime]);
    
        }


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
                click={agegarAnime(anime)}
                />
            ))}
        </div>
    )
}

export default ListaAmimes