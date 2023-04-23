import React, { useState } from 'react'
import '../css/ListaDeProducto.css';
import iconoModificar from '../images/iconoModificar.png';
import ModificarProducto from './ModificarProducto';
import Button from '../elementos/Button';
import ModalForm from './ModalForm';
import Stock from './Stock';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
export const ListaDeProducto = () => {
    const items = ["Sprite 3L", "Pepsi 3L", "Fanta 3L","CocaCola 3L"];
    const [showModal, setShowModal] = useState(false);

    const OpenModal = () => {
       setShowModal(true);
      };

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
        <div className='row' id='listap'>
            
         <div className='col' >
         
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
            <a onClick={OpenModal} > <AddCircleOutlineIcon/> </a>
              {showModal && <Stock onClose={() => setShowModal(false)} />}
           </div>
           </div>
          </li>

         ))}
       </ul> 
       
       </div>
      
       </div> <button id="volverHome" class="btn" onClick={Volver}>Volver</button>
       </section>
    )
}