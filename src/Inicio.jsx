import React from 'react'
import Encabezado from './componentes/Encabezado'
import ListaAmimes from '../src/componentes/ListaAnimes'
import { ProviderCategorias } from './providers/ContextoCategorias'

const Inicio = () => {
    return(
        <ProviderCategorias>
        <Encabezado />
        <ListaAmimes />
        </ProviderCategorias>
    )
}

export default Inicio