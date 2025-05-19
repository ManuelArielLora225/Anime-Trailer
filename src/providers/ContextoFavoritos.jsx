import React, { useContext, useState} from 'react';


export const ContextoFavoritos = React.createContext();

export const ProviderFavorito = ({children}) => {

    const [listaFavorito, setListaFavorito] = useState([]);

    const agregarListaFavorito = (anime) => {
        setListaFavorito(ListaActualizada =>[anime, ...ListaActualizada])
    }

    const eliminarDeFavoritos = (animeid) => {
        setListaFavorito(ListaActualizada => ListaActualizada.filter(anime => anime.id !== animeid));
    }

    return (
        <ContextoFavoritos.Provider value={{listaFavorito, agregarListaFavorito, eliminarDeFavoritos }}>
            {children}
        </ContextoFavoritos.Provider>
    )

}

export const useContextoFavoritos = () => useContext(ContextoFavoritos);