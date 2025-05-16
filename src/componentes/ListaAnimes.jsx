import React, {use, useState} from 'react'
import Logo from '../Logos/Logo_AnimeTrailer_ParaInicio.png'
import '../hojas-estilos/ListaAnimes.css'
import { DatosAnimes } from '../data/DatosAnimes'
import { Categorias } from '../data/Categorias'


const ListaAnime = () => {

    const [mostrarCategorias, setMostrarCategorias] = useState(false);

    return (

    <div className='contenedor-ListaAnime'>
        
        <div className='contenedor-cabecera'>

        <img src={Logo}  className='imagen-logo'/>

        <div className='contenedor-boton-categorias'>

        <button 
        className='boton-categoria' 
        onClick={() =>setMostrarCategorias(!mostrarCategorias)}
        >Categorías ▼</button>

        {mostrarCategorias &&
            <ul className='lista-categorias'>
                {Categorias.map((categoria, i) => (
                    <li className='categoria' key={i}>{categoria}</li>
                ))}
            </ul>
        }

        </div>
        

        </div>


    </div>
    )
}

export default ListaAnime