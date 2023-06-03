import React, { useState } from 'react'
import logo from '../images/logo.png'
import { NavLink, Navigate } from 'react-router-dom'
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
import { BsPersonCircle } from "react-icons/bs";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carrito from './Carrito';
import '../css/ClienteNavbar.css'
export const ClienteNavbar = ({ toggleNavbar }) => {

    const [showModal, setShowModal] = useState(false);

    const OpenModal = () => {
       setShowModal(true);
    };

  return (
    <html lang="en">
        <head>
            <meta charset="UTF-8"></meta>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            
        
            <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"></link>
            <title>Pocket Store</title> 
            <title>Pocket Store</title> 
        </head>
        <body>
            <nav class="sidebar  nav-container  " style={{backgroundColor:"#6b1cd4"}}>
                <div className='row'>
                            
                    <div class="text row justify-content-between align-items-center" style={{backgroundColor:"#6b1cd4"}}>
                        <div class="col" >
                            <span class="super" id="title">Pocket</span>
                            <span class="market" id="title">Store</span>
                        </div>

                        <div class="col-auto" id="barrita">
                            <a href="#">
                                < NavLink to="/login" >                
                                    <a class="text nav-text" id="cat">Ingresar</a>
                                </NavLink>
                            </a> 
                            <a className="stock" type="button" onClick={() => OpenModal()} id="car"> <ShoppingCartIcon color='#fff'/> </a>
                                {showModal && ( <Carrito onClose={() => setShowModal(false)} />)}
                              
                            
                        </div>
                    </div>

                    <div class="menu-bar " style={{backgroundColor:"#6b1cd4"}}>
                        <div class="menu">
                            <li class="nav-link">
                                <a href="#">
                                    < NavLink to="/" > 
                                        <a class="text nav-text" id="cat">HOME</a>
                                    </NavLink>
                                </a>    
                                <a href="#">
                                    < NavLink to="/" >    
                                        <a class="text nav-text" id="cat">TODOS</a>
                                    </NavLink>
                                </a>

                                <a href="#">
                                    < NavLink to="/Ofertas" >
                                        <a class="text nav-text" id="cat">OFERTAS</a>
                                    </NavLink>
                                </a>
                                            
                                <a href="#">
                                    < NavLink to="/HomeCategorias" >     
                                        <a class="text nav-text" id="cat">CATEGORIAS</a>
                                    </NavLink>    
                                </a>

                                <a href="#">
                                    < NavLink to="/Nosotros" >   
                                        <a class="text nav-text" id="cat">ACERCA DE NOSOTROS</a>
                                    </NavLink>
                                </a>    
                            </li>
                        </div>
                    </div>
                </div>
            </nav>  

            <script src="../src/index.js"></script>

        </body>
    </html>  
  )
}