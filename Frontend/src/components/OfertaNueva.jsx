
import React, { useState } from 'react';
import '../css/OfertaNueva.css';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
//import '../css/OfertaNueva.css';
import '../css/estilos.css';
import { Modal, Button } from 'react-bootstrap';
//import logo from '../imagenes/registroicono.png';


//import { Nav } from "react";



export const OfertaNueva = () => {

    

  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [inicio, setInicio] = useState('');
  const [fin, setFin] = useState("");
  const [descripcion, setDescripcion] = useState("");
  
  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);

  const hoy = new Date();

  // Agregar un año a la fecha actual
  const maxFecha = new Date(hoy.getFullYear() + 1, hoy.getMonth(), hoy.getDate()).toISOString().split('T')[0];

  
  const handleSubmit = (event) => {
    event.preventDefault();
   
    setProducto("");
    setPrecio("");
    setInicio("");
    setFin("");
    setDescripcion("");
    handleFirstModalShow();
    
  };
  const handleReset = () => {

    if((precio||producto||inicio||fin||descripcion) != ""){
      handleSecondModalShow();
    }else{
      window.location.href = '/home';
    }
    
  };
  function FirstModal(props) {
    return (
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>La oferta ha sido registrada con exito</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleFirstModalClose}>
            Volver
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
  function SecondModal(props) {
    return (
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cancelar Rewgistrar Oferta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¿Seguro que quiere salir del formulario sin guardar los datos ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSecondModalClose}>
            Cancelar
          </Button>
          <Button variant="secondary" onClick={handleSecondModalBorrar}>
           Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
const [showFirstModal, setShowFirstModal] = useState(false);
const [showSecondModal, setShowSecondModal] = useState(false);

const handleFirstModalClose = () => {
  
  setShowFirstModal(false);
  window.location.href = '/home';
}
const handleSecondModalClose = () => setShowSecondModal(false);
const handleSecondModalBorrar=()=>{

  setPrecio ('');
  setProducto('');
  setInicio('');
  setFin('');
  setDescripcion('');
  handleSecondModalClose();
  window.location.href = '/home';

}

const handleFirstModalShow = () => setShowFirstModal(true);
const handleSecondModalShow = () => setShowSecondModal(true);
      
 

  
  
  return (
    <div id='fondo' className='responsive'>
      
        
          
        
          <form className='container text-center'  onSubmit={handleSubmit}>
          <h1>Oferta Nueva</h1>
            <div className='row align-items-start'>
            <div className='col'>
            <label 
              htmlFor="producto" >
                Producto*
            </label>

            <Input 
              list="productos" 
              className="form-control "  
              id="producto" 
              minlength="1" 
              maxlength="20" 
              required  
              name="producto" 
              value={producto} 
              onChange={(e) => setProducto(e.target.value)} />

            <datalist id="productos">
              <option value="Manzana" />
              <option value="Banana" />
              <option value="Fresa" />
              <option value="Mango" />
            </datalist>
            <br />

            <label 
              htmlFor="precio" >
                Precio de Oferta(bs)*
            </label>

            <Input 
              type='number' 
              className="form-control " 
              id="precio" 
              step="0.01"
              placeholder='precio*' 
              min="0.1" 
              max="999999"  
              required 
              value={precio} 
              onChange={(e) => setPrecio(e.target.value)} />
            <br />
            
            </div>
  
            <div 
              className='col'>
            <label 
              htmlFor="inicio">
                Inicio de Oferta*:
            </label>
            <Input 
              type="date" 
              className="form-control " 
              name="ini" 
              min={formattedDate} 
              max={maxFecha} 
              id="inicio" 
              placeholder='fecha-inicio*'
              required 
              value={inicio} 
              onChange={(e) => setInicio(e.target.value)} />
            <br />

            <label 
              htmlFor="fin">
                Fin de Oferta*:
            </label>
            <Input 
              type= "date" 
              className="form-control "  
              min={inicio} 
              max={maxFecha} 
              id="fin" 
              placeholder='fecha-fin*'
              required 
              value={fin} 
              onChange={(e) => setFin(e.target.value)} />
            <br />
            
            </div>
            
            </div>
            <br />
            <label 
              htmlFor="descripcion" 
              className='container text-center'>
                Descripción*
            </label>
            <Input 
              type="text"
              className="form-control "  
              id="descripcion" 
              placeholder='descripcion*'
              minlength="10" 
              maxlength="100"
              required 
              value={descripcion} 
              onChange={(e) => setDescripcion(e.target.value)} />
            
            <br />
            <br />
            
            <button type="submit" className="btn mx-5" id='guardar'>Guardar</button>
            <button type="button" onClick={handleReset} id='borrar' className="btn mx-5">Cancelar</button>
           
          </form>
          <FirstModal show={showFirstModal} handleClose={handleFirstModalClose} />
          <SecondModal show={showSecondModal} handleClose={handleSecondModalClose} />

        </div>
      
    )
  }
  //export const RegistrarOfertaNueva();
