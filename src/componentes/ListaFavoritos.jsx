import React from "react";
import '../hojas-estilos/ListaAnimes.css'
import Anime from './Anime'
import EncabezadoFavoritos from './EncabezadoFavoritos'
import { useContextoFavoritos } from '../providers/ContextoFavoritos'
import { useContextoDetalles } from "../providers/ContextoDetalle";

 
const ListaAmimes = () => {


    const { setDetalleAnime } = useContextoDetalles();

    const { listaFavorito } = useContextoFavoritos();

        
        const agegarAnime = (anime) => {
            setDetalleAnime([anime]);
        }

    return (
        <>
        <EncabezadoFavoritos />
        <div className="contenedor-lista-animes">
            {listaFavorito.map(anime => (
                <Anime 
                key={anime.id}
                titulo={anime.titulo}
                portada={anime.portada}
                idVideo={anime.idVideo}
                descripcion={anime.descripcion}
                categorias={anime.categorias}
                click={() => agegarAnime(anime)}
                />
            ))}
        </div>
        </>
    )
}

export default ListaAmimes