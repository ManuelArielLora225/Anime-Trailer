import React, {useState} from 'react'
import Logo from '../Logos/Logo_AnimeTrailer_ParaInicio.png'
import '../hojas-estilos/Encabezado.css'
import { Categorias } from '../data/Categorias'
import { useContextoCategorias } from '../providers/ProvidersCategorias'


const Encabezado = () => {

    const [mostrarCategorias, setMostrarCategorias] = useState(false);

    const {categoriaSeleccionada, seleccionarCategoria} = useContextoCategorias();


    return (
               
        <div className='contenedor-cabecera'>

        <img src={Logo}  className='imagen-logo'/>


        <div className='contenedor-boton-categorias'>

        <button 
        className='boton-categoria' 
        onClick={() => setMostrarCategorias(!mostrarCategorias)}
        >Categorías ▼</button>

        {mostrarCategorias &&
            <ul className='lista-categorias'>
                {Categorias.map((categoria, i) => (
                    <li className='categoria' key={i}
                    onClick={() => {seleccionarCategoria(categoria); setMostrarCategorias(false)}}
                    >{categoria}</li>
                ))}
            </ul>
        }

        </div>

        </div>
    )
}

export default Encabezado