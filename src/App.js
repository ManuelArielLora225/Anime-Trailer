import React from "react";
import Inicio from "./Inicio";
import DetallesAnime from '../src/componentes/DetallesAnime'
import { ProviderDetalles } from './providers/ContextoDetalle'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <ProviderDetalles>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/:titulo" element={<DetallesAnime />} />
      </Routes>
      </BrowserRouter>


   
   </ProviderDetalles>
    </div>
  );
}

export default App;
