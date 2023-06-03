import './App.css';
import { SideMenu } from './components/SideMenu';
import { ClienteNavbar } from './components/ClienteNavbar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { ErrorNotFound } from './components/ErrorNotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
import {default as HomeCliente} from './components/HomeCliente';
import {default as Delete} from './components/Delete';
import {default as Abarrotes} from './components/pagescli/Abarrotes';
import {default as Bebidas} from './components/pagescli/Bebidas';
import {default as BebidasA} from './components/pagescli/BebidasA';
import {default as CuidadoP} from './components/pagescli/CuidadoP';
import {default as Enlatados} from './components/pagescli/Enlatados';
import {default as Farmacos} from './components/pagescli/Farmacos';
import {default as FiamyEmb} from './components/pagescli/FiamyEmb';
import {default as Golosinas} from './components/pagescli/Golosinas';
import {default as Lacteos} from './components/pagescli/Lacteos';
import {default as LimpiezaH} from './components/pagescli/LimpiezaH';
import {default as Panaderia} from './components/pagescli/Panaderia';
import {default as Snacks} from './components/pagescli/Snacks';
import {default as Varios} from './components/pagescli/Varios';
import {default as OfertasCli} from './components/pagescli/OfertasCli';
import {default as Lista} from './components/Lista';
import {default as Nosotros} from './components/pagescli/Nosotros';
import {RegistarCliente} from './components/RegistarCliente';
import {LoginC} from './components/LoginC';
import "./elementos/modal.js"
import React, { useState } from "react";
import Ofertas from './components/pagescli/Ofertas';
import  {ProtectedR}  from './components/router/ProtectedR';
import Route1 from './components/router/Route1';
import HomeOferta from './components/pagescli/HomeOfertas';
function App() {
  const [navbarCliente, setNavbarCliente] = useState(true);
  const [user, setUser] = useState(null)

  function toggleNavbar() {
    setNavbarCliente(!navbarCliente);
  }
  return (

    <div center>
      {navbarCliente ? (
        <BrowserRouter>
        <SideMenu toggleNavbar={toggleNavbar}/>
        <Routes>
          
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/home" element={<Home/>}/>
            
            <Route exact path="/eliminarProducto" element={<Delete/>}/>
            <Route exact path="/listaProducto" element={<Lista/>}/>
            <Route exact path="/modificarDatosN" element={<ModificarNegocio/>}/>
            <Route exact path="/ofertaNueva" element={<NuevaOferta/>}/>
            <Route exact path="/registrarProductoN" element={<ProductoNuevo/>}/>
            <Route exact path="*" element={<ErrorNotFound/>}/>
         
        </Routes>
      </BrowserRouter>
      ) : (
        <BrowserRouter>

        


        








        <ClienteNavbar toggleNavbar={toggleNavbar}/>
        <Routes>
          <Route exact path="/" element={<HomeCliente/>}/>
          <Route exact path="/homeC" element={<HomeCliente/>}/>
          <Route exact path="/login" element={<LoginC/>}/>
          <Route exact path="/registrar" element={<RegistarCliente/>}/>
          <Route exact path="/Ofertas" element={<Ofertas/>}/>
          <Route exact path="/Nosotros" element={<Nosotros/>}/>
          <Route exact path="/Abarrotes" element={<Abarrotes/>}/>
          <Route exact path="/Bebidas" element={<Bebidas/>}/>
          <Route exact path="/BebidasA" element={<BebidasA/>}/>
          <Route exact path="/CuidadoP" element={<CuidadoP/>}/>
          <Route exact path="/Enlatados" element={<Enlatados/>}/>
          <Route exact path="/Farmacos" element={<Farmacos/>}/>
          <Route exact path="/FiamyEmb" element={<FiamyEmb/>}/>
          <Route exact path="/Golosinas" element={<Golosinas/>}/>
          <Route exact path="/Lacteos" element={<Lacteos/>}/>
          <Route exact path="/LimpiezaH" element={<LimpiezaH/>}/>
          <Route exact path="/Panaderia" element={<Panaderia/>}/>
          <Route exact path="/Snacks" element={<Snacks/>}/>
          <Route exact path="/Varios" element={<Varios/>}/>
          <Route exact path="/OfertasCli" element={<OfertasCli/>}/>
          <Route exact path="*" element={<ErrorNotFound/>}/>
           
           <Route exact path="/HomeCategorias" element={<HomeOferta/>}/>
           <Route exact path="*" element={<ErrorNotFound/>}/>
         
        </Routes>
      </BrowserRouter>
      )}
      {/* otros componentes de la página */}
    </div>
  
    /*<div center> 
    <BrowserRouter>
          
          <ClienteNavbar />
          <Routes>
            
            <Route exact path="/" element={<HomeCliente/>}/>
            <Route exact path="/homeC" element={<HomeCliente/>}/>
            <Route exact path="/login" element={<LoginC/>}/>
            <Route exact path="/registrar" element={<RegistarCliente/>}/>
            <Route exact path="/Abarrotes" element={<Abarrotes/>}/>
            <Route exact path="/Bebidas" element={<Bebidas/>}/>
            <Route exact path="/BebidasA" element={<BebidasA/>}/>
            <Route exact path="/CuidadoP" element={<CuidadoP/>}/>
            <Route exact path="/Enlatados" element={<Enlatados/>}/>
            <Route exact path="/Farmacos" element={<Farmacos/>}/>
            <Route exact path="/FiamyEmb" element={<FiamyEmb/>}/>
            <Route exact path="/Golosinas" element={<Golosinas/>}/>
            <Route exact path="/Lacteos" element={<Lacteos/>}/>
            <Route exact path="/LimpiezaH" element={<LimpiezaH/>}/>
            <Route exact path="/Panaderia" element={<Panaderia/>}/>
            <Route exact path="/Snacks" element={<Snacks/>}/>
            <Route exact path="/Varios" element={<Varios/>}/>
            <Route exact path="/OfertasCli" element={<OfertasCli/>}/>
            <Route exact path="*" element={<Navigate to="homeC"/>}/>
          

          
            <Route path="/admi/*" element={
              <ProtectedR isAllowed={!!user && user.roles.includes('admi')}>
              <SideMenu />
            </ProtectedR>
            }/>
            <Route path='/*' element={<Route1/>}/>
          
          </Routes>
    </BrowserRouter>
  </div>*/
    
  
  /*<BrowserRouter>
      <Routes>
      <Route exact path="/" element={<RegistarCliente/>}/>
      <Route exact path="/login" element={<LoginC/>}/>
        <Route exact path="/registro" element={<RegistarCliente/>}/>
        
        
      </Routes>
  
    </BrowserRouter>*/

    /*<BrowserRouter>
      <ClienteNavbar toggleNavbar={toggleNavbar}/>
    </BrowserRouter>*/

  );
}

export default App;