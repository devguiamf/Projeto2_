import React from "react";
import Routers from "../../routers.js";
import { BrowserRouter } from "react-router-dom";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
