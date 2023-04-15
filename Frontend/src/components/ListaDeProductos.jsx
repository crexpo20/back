import React, { useState } from 'react'
import '../css/ListaDeProducto.css';
import iconoModificar from '../images/iconoModificar.png';
import ModificarProducto from './ModificarProducto';
import Button from '../elementos/Button';
import ModalForm from './ModalForm';
export const ListaDeProducto = () => {
    const items = ["Sprite 3L", "Pepsi 3L", "Fanta 3L","CocaCola 3L"];
    
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };
    const Volver = () => {      window.location.href = '/home';
  };
    return (
      <section class = "home">
            <div id='lista'>
            <h1 id='titulo'>Lista de Productos</h1>
            </div>
        <div className='row'>
         <div className='col-2'></div>   
         <div className='col-4' >
         
        <ul>
        {items.map((item, index) => (
          <li id='elemento' key={index}>
            <div className='row'>
            <div className='col-8'>
            <h3>{item}</h3>
            </div>
            <div className='col-4'>
            
            <Button onClick={handleOpenModal} className ='button'/>
            <ModalForm isOpen={isOpen} onClose={handleCloseModal} />
            
           </div>
           </div>
          </li>

         ))}
       </ul> 
       <button id="volverHome" onClick={Volver}>Volver</button>
       </div>
       </div>
       </section>
    )
}