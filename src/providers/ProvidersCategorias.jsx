import React, { useContext, useState} from 'react'

export const ContextoCategorias = React.createContext();

export const ProviderCategorias = ({children}) => {

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")

    const seleccionarCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria);
    }

    return(
        <ContextoCategorias.Provider value={{categoriaSeleccionada, seleccionarCategoria}}>
            {children}
        </ContextoCategorias.Provider>
    )
}

export const useContextoCategorias = () => useContext(ContextoCategorias);