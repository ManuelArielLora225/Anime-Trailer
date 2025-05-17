import React, { useContext, useState } from "react"

export const ContextoCategoria = React.createContext();

export const ProviderCategorias = ({children}) => {

const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")



return(
    <ContextoCategoria.Provider value={{categoriaSeleccionada, setCategoriaSeleccionada}}>
        {children}
    </ContextoCategoria.Provider>
)


}

export const useContextoCategoria = () => useContext(ContextoCategoria);