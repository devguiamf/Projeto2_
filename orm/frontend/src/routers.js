import React from "react";
import Geral from "./components/Geral/Geral.js"
import Categorias from "./components/Categorias/Categorias.js"
import Corretor from "./components/Corretor/Corretor.js"
import Imovel from "./components/Imovel/Imovel.js"

import { Route, Routes } from "react-router-dom"

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Geral />} />
            <Route exact path="/categorias" element={<Categorias />} />
            <Route exact path="/corretor" element={<Corretor />} />
            <Route exact path="/imovel" element={<Imovel/>} />
        </Routes>
    )
}

export default Routers

