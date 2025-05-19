import React, { useState, useContext, Children} from 'react'

export const ContextoDetalles = React.createContext();

export const ProviderDetalles = ({children}) => {

    const [detalleAnime, setDetalleAnime] = useState([]);


    return(
        <ContextoDetalles.Provider value={{detalleAnime, setDetalleAnime}}>
            {children}
        </ContextoDetalles.Provider>
    )
}

export const useContextoDetalles = () => {useState(ContextoDetalles)};

