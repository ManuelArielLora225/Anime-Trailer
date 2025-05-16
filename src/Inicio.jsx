import React from 'react'
import Encabezado from './componentes/Encabezado'
import ListaAnimes from './componentes/ListaAnimes'
import { ProviderCategorias } from './providers/ProvidersCategorias'



const Inicio = () => {
    return(
    <ProviderCategorias>
        <Encabezado />
        <ListaAnimes />
    </ProviderCategorias> 
    )
}

export default Inicio