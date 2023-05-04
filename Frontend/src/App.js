//import logo from './logo.svg';
import './App.css';
import { SideMenu } from './components/SideMenu';
import { ClienteNavbar } from './components/ClienteNavbar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ErrorNotFound } from './components/ErrorNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AcercaDe } from './components/AcercaDe';
import {EliminarProducto} from './components/EliminarProducto';
import {ListaDeProducto} from './components/ListaDeProductos';
import {ModificarDatosDelNegocio} from './components/ModificarDatosDelNegocio';
import {OfertaNueva} from './components/OfertaNueva';
import { RegistrarProductoNuevo } from './components/RegistrarProductoNuevo';
import {ProductoNuevo} from './components/ProductoNuevo';
import { ModificarNegocio } from './components/ModificarNegocio';
import {NuevaOferta} from './components/NuevaOferta';
import {ProductosPrueba} from './components/ProductoNuevo copy';
import {Eliminar} from './components/Eliminar';
import {EliminarP} from './components/EliminarP';
import {HomeCliente} from './components/HomeCliente';
import {default as Delete} from './components/Delete';
import {default as Lista} from './components/Lista';
import {default as Ofer} from './components/Ofer'
import "./elementos/modal.js"
import React, { useState } from "react";
function App() {
  const [navbarCliente, setNavbarCliente] = useState(true);

  function toggleNavbar() {
    setNavbarCliente(!navbarCliente);
  }
  return (

    <div>
    {navbarCliente ? (
       <BrowserRouter>
       <SideMenu toggleNavbar={toggleNavbar}/>
         <Routes>
           <Route exact path="/" element={<Home/>}/>
           <Route exact path="/home" element={<Home/>}/>
           <Route exact path="/eliminarProducto" element={<Delete/>}/>
           <Route exact path="/listaProducto" element={<Lista/>}/>
           <Route exact path="/modificarDatosN" element={<ModificarNegocio/>}/>
           <Route exact path="/ofertaNueva" element={<Ofer/>}/>
           <Route exact path="/registrarProductoN" element={<ProductoNuevo/>}/>
           <Route exact path="*" element={<ErrorNotFound/>}/>
           
         </Routes>
     
       </BrowserRouter>
    ) : (
      <BrowserRouter>
      <ClienteNavbar toggleNavbar={toggleNavbar}/>
        <Routes>
        <Route exact path="/" element={<HomeCliente/>}/>
           <Route exact path="/home" element={<HomeCliente/>}/>
  
           <Route exact path="*" element={<ErrorNotFound/>}/>
         
        </Routes>
    
      </BrowserRouter>
    )}
    {/* otros componentes de la página */}
  </div>
    
  
  );
}

export default App;
