//import logo from './logo.svg';
import './App.css';
import { SideMenu } from './components/SideMenu';
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
import "./elementos/modal.js"
function App() {
  return (

      <BrowserRouter>
      <SideMenu/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/eliminarProducto" element={<EliminarProducto/>}/>
          <Route exact path="/listaProducto" element={<ListaDeProducto/>}/>
          <Route exact path="/modificarDatosN" element={<ModificarNegocio/>}/>
          <Route exact path="/ofertaNueva" element={<NuevaOferta/>}/>
          <Route exact path="/registrarProductoN" element={<ProductoNuevo/>}/>
          <Route exact path="*" element={<ErrorNotFound/>}/>
        </Routes>
    
      </BrowserRouter>

  );
}

export default App;
