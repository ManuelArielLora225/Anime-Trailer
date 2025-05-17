import React, {useState} from 'react'
import Logo from '../Logos/Logo_AnimeTrailer_ParaInicio.png'
import '../hojas-estilos/Encabezado.css'
import { Categorias } from '../data/Categorias'
import { useContextoCategoria } from '../providers/ContextoCategorias'


const Encabezado = () => {

    const [mostrarCategorias, setMostrarCategorias] = useState(false);
    
    const { categoriaSeleccionada, setCategoriaSeleccionada } = useContextoCategoria();

    const SeleccionarCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria);
    }

    return (
        
        <div className='contenedor-cabecera'>

        <img src={Logo}  className='imagen-logo'/>

        <h2>{categoriaSeleccionada}</h2>

        <div className='contenedor-boton-categorias'>

        <button 
        className='boton-categoria' 
        onClick={() =>setMostrarCategorias(!mostrarCategorias)}
        >Categorías ▼</button>

        {mostrarCategorias &&
            <ul className='lista-categorias'>
                {Categorias.map((categoria, i) => (
                    <li className='categoria' 
                    key={i}
                    onClick={() => {
                     SeleccionarCategoria(categoria);
                     setMostrarCategorias(false);
                    }}
                    >{categoria}</li>
                ))}
            </ul>
        }

        </div>
        

        </div>

    )
}

export default Encabezado