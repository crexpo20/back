import { SideMenu } from '../SideMenu';
import { Home } from '../Home';
import { ErrorNotFound } from '../ErrorNotFound';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {ProductoNuevo} from '../ProductoNuevo';
import { ModificarNegocio } from '../ModificarNegocio';
import {NuevaOferta} from '../NuevaOferta';
import {default as Delete} from '../Delete';
import {default as Lista} from '../Lista';
//import "src/elementos";
import React, { useState } from "react";
import  {ProtectedR}  from '../router/ProtectedR';


const  Route1 = () => {
  /*const [navbarCliente, setNavbarCliente] = useState(true);

  function toggleNavbar() {
    setNavbarCliente(!navbarCliente);
  }*/
    return(
        <BrowserRouter>
          <SideMenu />
          <Routes>
            <Route element={<ProtectedR/>}>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/homeA" element={<Home/>}/>
              <Route exact path="/eliminarProducto" element={<Delete/>}/>
              <Route exact path="/listaProducto" element={<Lista/>}/>
              <Route exact path="/modificarDatosN" element={<ModificarNegocio/>}/>
              <Route exact path="/ofertaNueva" element={<NuevaOferta/>}/>
              <Route exact path="/registrarProductoN" element={<ProductoNuevo/>}/>
              <Route exact path="*" element={<Navigate to="homeA"/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    );
};

export default Route1;