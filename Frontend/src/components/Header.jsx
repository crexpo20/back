import React from 'react'
import logo from '../images/logo192.png'
import { NavLink } from 'react-router-dom'
import '../css/estilos.css'
import { Fragment } from 'react'
import {AiFillFileAdd} from "react-icons/ai"
import {VscNotebook} from "react-icons/vsc"
import {BsFillTrash3Fill} from "react-icons/bs"
import {BsShop} from "react-icons/bs"
import {HiClipboardDocumentList} from "react-icons/hi2"
import {MdSell} from "react-icons/md"
import {BiHomeHeart} from "react-icons/bi"
import { FaStore } from "react-icons/fa" ;   
import { TiThMenu } from "react-icons/ti";
import "../config/barra"
export const Header = () => {
  return (
    <>  
    
   
    <head>
       <title>MicroMarket TITA</title>
     </head>
    <body id="body">

        <header>
        </header>
        
        <div class="items" id="menu_side"> 
        
            <nav className="menu navbar-expand-lg" >
           
            <div id="tienda">
                            <i><FaStore/></i>
                             <a class ="button"> SuperMarket TITA </a>
              </div>
            
            <div class="options__menu" id="menu_side"> 
                    
                <a href = "#">
                        
                    </a>

                    <a href = "#" class="selected">
                        <div class="option">
                            <i><NavLink to="/home" id = "botonBarra"><BiHomeHeart/></NavLink></i>
                             <a class ="button"><NavLink to="/home" className="nav-item nav-link text-center" >Inicio</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#" class="selected">
                        <div class="option">
                            <i><NavLink to="/registrarProductoN" id = "botonBarra"><VscNotebook/></NavLink></i>
                             <a class ="button"><NavLink to="/registrarProductoN" className="nav-item nav-link text-center" >Registrar Producto</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#" class="selected">
                        <div class="option">
                            <i><NavLink to="/eliminarProducto" id = "botonBarra"><BsFillTrash3Fill/></NavLink></i>
                             <a class ="button"><NavLink to="/eliminarProducto" className="nav-item nav-link text-center" >Eliminar producto</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#" class="selected">
                        <div class="option">
                            <i><NavLink to="/listaProducto" id = "botonBarra"><HiClipboardDocumentList/></NavLink></i>
                             <a class ="button"><NavLink to="/listaProducto" className="nav-item nav-link text-center" >Lista de Productos</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#" class="selected">
                        <div class="option">
                            <i><NavLink to="/modificarDatosN" id = "botonBarra"><BsShop/></NavLink></i>
                             <a class ="button"><NavLink to="/modificarDatosN" className="nav-item nav-link text-center" >Modificar datos de negocio</NavLink></a>
                        </div>
                        
                    </a>

                    <a href = "#" class="selected">
                        <div class="option">
                            <i><NavLink to="/ofertaNueva " id = "botonBarra"> <MdSell/> </NavLink></i>
                             <a class ="button" id="oferta"><NavLink to="/ofertaNueva " className ="nav-item nav-link text-center" >Registrar oferta nueva</NavLink></a>
                        </div>
                        
                    </a>
                    
                </div>

            </nav>
            
        </div>
        </body>
        
    </>
    
  )
}
