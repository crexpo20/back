import React from 'react'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
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
export const SideMenu = () => {

  return (
    <html lang="en">
<head>
    <meta charset="UTF-8"></meta>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    
   
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
    
    <title>SuperMarket TITA</title> 
</head>
<body>
    <nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="../images/logo.png" alt=""></img>
                </span>

                <div class="text logo-text">
                    <i src="../images/logo.png"></i>
                    <span class="name">TITA</span>
                    <span class="profession">SuperMarket</span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">


                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#">
                            <NavLink to="/home" >
                              <i id = "iconobarra"><BiHomeHeart/>
                              <a id = "pie">Inicio</a>
                              </i>
                              
                              <span class="text nav-text">Inicio
                              
                              </span>
                              
                                

                            </NavLink>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <NavLink to="/registrarProductoN">
                                <i id = "iconobarra"><VscNotebook/>
                                <a id = "pie">Productos</a>
                                </i>
                                <a class="text nav-text">Registrar producto</a>
                            </NavLink>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                             <NavLink to="/eliminarProducto">
                                 <i id = "iconobarra"><BsFillTrash3Fill/>
                                 <a id = "pie">Eliminar</a>
                                 </i>
                                 <a class="text nav-text">Eliminar productos</a>
                            </NavLink>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                        <NavLink to="/listaProducto">
                                <i id = "iconobarra"><HiClipboardDocumentList/>
                                <a id = "pie">Lista</a>
                                </i>
                                <a class="text nav-text">Lista de productos</a>
                            </NavLink>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            < NavLink to="/modificarDatosN" >
                                <i id = "iconobarra" ><BsShop/>
                                <a id = "pie">Negocio</a>
                                </i>
                                <a class="text nav-text">Modificar datos del negocio</a>
                            </NavLink>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                        <NavLink to="/ofertaNueva">
                            <i id = "iconobarra" > <MdSell/> 
                            <a id = "pie">Oferta</a>
                            </i>
                            <a class="text nav-text" >Registrar oferta nueva</a>
                            </NavLink>
                        </a>
                    </li>

                </ul>
            </div>

            <div class="bottom-content">
                

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon'></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch"></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>

    <script src="../src/index.js"></script>

</body>
</html>  
  )
}
