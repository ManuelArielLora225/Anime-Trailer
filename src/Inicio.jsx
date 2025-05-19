import React from 'react'
import Encabezado from './componentes/Encabezado'
import ListaAmimes from '../src/componentes/ListaAnimes'
import { ProviderCategorias } from './providers/ContextoCategorias'
import { ProviderDetalles } from './providers/ContextoDetalle'

const Inicio = () => {
    return(
        <ProviderDetalles>
        <ProviderCategorias>
        <Encabezado />
        <ListaAmimes />
        </ProviderCategorias>
        </ProviderDetalles>
    )
}

export default Inicio