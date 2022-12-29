import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
//import { Router, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos/index";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Router>
				<Route path="/"  element={Inicio} />
				<Route path="/productos/"  element={ProductosList} />
        <Route path="/producto/:id"  element={ProductosDetalles} />
			</Router>
    </section>
  );
}
