import React from "react";
import Inicio from "./Inicio";
import DetallesAnime from '../src/componentes/DetallesAnime'
import ListaFavoritos from './componentes/ListaFavoritos'
import { ProviderDetalles } from './providers/ContextoDetalle'
import { ProviderFavorito } from './providers/ContextoFavoritos'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ProviderFavorito>
      <ProviderDetalles>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/:titulo" element={<DetallesAnime />} />
        <Route path="/Favoritos" element={<ListaFavoritos />} />
      </Routes>
      </BrowserRouter>
   </ProviderDetalles>
   </ProviderFavorito>
    </div>
  );
}

export default App;
