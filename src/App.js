import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ResponsiveAppBar from './Components/AppBar';
import Contacto from './Components/Contact';
import Services from './Components/Services';
import ItemDetailContainer from './Components/ItemDetailContainer';
import ItemListContainer from './Components/ItemListContainer';
import ProductsForm from './Components/ProductsForm';

function App() {
  return (
   <>
   <BrowserRouter>
        <ResponsiveAppBar />
        {/* <h1 className='titulo-principal'>Productos</h1> */}

      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />        
        <Route exact path="/productos" element={<ItemListContainer />} />
        <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route exact path= "/item/:idItem" element={<ItemDetailContainer />} />
        <Route exact path="/contacto" element={<Contacto />}/>
        <Route exact path="/servicios" element={<Services />}/>
        <Route exaact path="/productsform" element={<ProductsForm />} />
      </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
