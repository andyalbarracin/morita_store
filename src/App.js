import React from 'react'
import { Header } from "./components/Header";
import { Carrito } from "./components/Carrito";
import { DataProvider } from './context/DataProvider';
import { BrowserRouter as Router} from "react-router-dom";
//import { Page } from "./components/Page";
import "boxicons";
import { ProductosList } from './components/page/productos';

function App() {

  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header />
      <Carrito />
      <ProductosList/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
