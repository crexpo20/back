import React, { useState,Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import '../css/EliminarP.css';
import Axios from 'axios';
import { ContenedorBotonCentrado } from '../elementos/Formularios';
import { ProductoNuevo } from './ProductoNuevo';

//dentro de la funcion return va el codigo que se va a ejecutar
//const producto = useState([]);

 export const Eliminar = () => {
  const [productos, setProductos ]= useState([]);
    function constructor(props){
        //super(props);
        this.state={
             productos :[]
        };
        this.getProductos = this.getProductos.bind(this);
        
    };
    
   
    function componentDidMount(){
      this.getProductos();
    };


    const getProductos=async()=>{
      await Axios.get('http://31.220.21.237:8000/api/getProductos')
      .then(res=>{
        this.setState([res.data]);
        console.log(res.data);
      }).catch((error) => {
        console.log(error);    
      });
    };

    function render(){
      return(
        < div class="home">
          <ContenedorBotonCentrado><h1>Eliminar Producto</h1></ContenedorBotonCentrado>
            <table className='table'>
              <thead className='thead-dark'>
                <tr>
                  <th scope = "col">Productos</th>
                  <th scope = "col">Eliminar</th>
                </tr>
              
              </thead>
              <tbody>

               
                
              </tbody>
            </table>
          </div>
        )
    };
};
