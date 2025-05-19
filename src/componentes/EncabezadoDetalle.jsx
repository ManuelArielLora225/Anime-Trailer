import React, {useState} from 'react'
import Logo from '../Logos/Logo_AnimeTrailer_ParaInicio.png'
import '../hojas-estilos/EncabezadoDetalle.css'
import { Categorias } from '../data/Categorias'
import { Link } from 'react-router-dom'


const EncabezadoDetalle = () => {

    return (
        
        <div className='contenedor-cabecera'>

        <Link to="/"><img src={Logo}  className='imagen-logo'/></Link>

        </div>

    )
}

export default EncabezadoDetalle