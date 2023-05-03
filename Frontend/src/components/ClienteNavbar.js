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
import { BsPersonCircle } from "react-icons/bs";
import '../css/ClienteNavbar.css'
export const ClienteNavbar = ({ toggleNavbar }) => {

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
<nav class="sidebar  nav-container  ">
    <div className='row'>
        
            
                
        <div class="text row justify-content-between align-items-center">
  <div class="col">
    <span class="super">Super</span>
    <span class="market">Market</span>
    <span class="name">TITA</span>
  </div>
  <div class="col-auto">
    <a onClick={toggleNavbar} class="icono"><BsPersonCircle /></a>
  </div>
</div>

               
            

        

        <div class="menu-bar ">
            <div class="menu">


                <ul class="menu-linksCliente">
                <li class="nav-link">
                        <a href="#">
                            < NavLink to="" >
                              
                                <a class="text nav-text">ABARROTES</a>
                            </NavLink>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            < NavLink to="" >
                              
                                <a class="text nav-text">BEBIDAS ALCOHOLICAS</a>
                            </NavLink>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            < NavLink to="" >
                              
                                <a class="text nav-text">CUIDADO PERSONAL</a>
                            </NavLink>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            < NavLink to="" >
                              
                                <a class="text nav-text">ENLATADOS</a>
                            </NavLink>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            < NavLink to="" >
                              
                                <a class="text nav-text">FIAMBRES Y EMBUTIDOS</a>
                            </NavLink>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            < NavLink to="" >
                              
                                <a class="text nav-text">LACTEOS</a>
                            </NavLink>
                        </a>
                    </li>
                    <li class="nav-link">
                        <a href="#">
                            < NavLink to="" >
                              
                                <a class="text nav-text">PANADERIA</a>
                            </NavLink>
                        </a>
                    </li>
                    
                   
                  

                </ul>
            </div>

        </div>
        </div>
    </nav>

    <script src="../src/index.js"></script>

</body>
</html>  
  )
}
