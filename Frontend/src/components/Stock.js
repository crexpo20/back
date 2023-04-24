import React, { useState } from "react";
import {FormularioModificarProducto,} from '../elementos/MiniForm';


function Stock({ onClose, producto }) {
  const [cantidad, setCantidad] = useState(1);
  const [precioCompra, setPrecioCompra] = useState(0);
  const [fechaVencimiento, setFechaVencimiento] = useState('');



  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  const hoy = new Date();

  // Agregar un año a la fecha actual
  const maxFecha = new Date(hoy.getFullYear() + 1, hoy.getMonth(), hoy.getDate()).toISOString().split('T')[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
    onClose();
  };

  const handleCantidadChange = (event) => {
    setCantidad(parseInt(event.target.value));
  };

  const handlePrecioCompraChange = (event) => {
    setPrecioCompra(parseFloat(event.target.value));
  };

  const handleFechaVencimientoChange = (event) => {
    setFechaVencimiento(event.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <header>
          <h4>{producto}</h4>
        </header>
        <FormularioModificarProducto action="" onSubmit={handleSubmit}>
            
            <label 
              htmlFor="cantidad">
              <b> Cantidad*: </b>
            </label>
            <input
              type="number"
              className="form-control " 
              id="cantidad"
              name="cantidad"
              min="1"
              required 
              value={cantidad}
              color= "transparent"
              margin = "1"
              border-bottom-color = "#000000"
              onChange={handleCantidadChange}
            />
          
        <div  className='col' id= "calendar">
        
        <label 
          htmlFor="fechaVencimiento">
           <b> Fecha de vencimiento*: </b>
        </label>
        <input 
          type="date" 
          className="form-control " 
          name="fechaVencimiento" 
          min={formattedDate} 
          max={maxFecha} 
          id="fechaVencimiento" 
          placeholder='fecha-inicio*'
          required 
          value={fechaVencimiento} 
          color= "transparent"
          margin = "1"
          border-bottom-color = "#000000"
          onChange={handleFechaVencimientoChange} />
        <br />

        </div>
    
            <label 
              htmlFor="precioCompra">
              <b> Precio de compra*: </b>
            </label>
            <input
              type="number"
              className="form-control " 
              id="precioCompra"
              name="precioCompra"
              min="0"
              step="0.01"
              required 
              value={precioCompra}
              color= "transparent"
              margin = "1"
              border-bottom-color = "#000000"
              onChange={handlePrecioCompraChange}
            />
            <br/>
            <br/>
            <div className="button-container">
              <button type="submit">Enviar</button>
              <button onClick={onClose}>Cerrar</button>
            </div>
        </FormularioModificarProducto>
      </div>
    </div>
  );
}

export default Stock;