import React, {useState} from 'react'
import Logo from '../Logos/Logo_AnimeTrailer_ParaInicio.png'
import '../hojas-estilos/EncabezadoFavoritos.css'
import { Link } from 'react-router-dom'


const EncabezadoDetalle = () => {

    return (
        
        <div className='contenedor-cabecera-favorito'>

        <Link to="/"><img src={Logo}  className='imagen-logo-favorito'/></Link>

        <h2 className='titulo-favorito'>Favoritos</h2>

        </div>

    )
}

export default EncabezadoDetalle