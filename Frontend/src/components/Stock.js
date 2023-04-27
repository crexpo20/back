import React, { useState } from "react";
import { Boton} from '../elementos/MiniForm';
import '../css/Stock.css';

function Stock({ isClose, producto, actualizarProducto }) {
  const [cantidad, setCantidad] = useState(1);
  const [precioCompra, setPrecioCompra] = useState(0);
  const [fechaVencimiento, setFechaVencimiento] = useState('');

  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  const hoy = new Date();
  const maxFecha = new Date(hoy.getFullYear() + 1, hoy.getMonth(), hoy.getDate()).toISOString().split('T')[0];

  const handleSubmit = (event) => {
    event.preventDefault();
    actualizarProducto(producto, cantidad);
    isClose();
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
        <header className="modal-header">
          <h4 className="modal-title">{producto.nombre}</h4>
        </header>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="cantidad actual">
            <b>Cantidad actual: </b>
          </label>
          <div>{producto.cantidad}</div>
          <label htmlFor="cantidad">
            <b>Agregar Cantidad: </b>
          </label>
          <input
            type="number"
            className="form-control "
            id="cantidad"
            name="cantidad"
            min="1"
            max="999"
            required
            value={cantidad}
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
              min="1.00"
              step="0.01"
              required 
              value={precioCompra}
              color= "transparent"
              margin = "1"
              border-bottom-color = "#000000"
              onChange={handlePrecioCompraChange}
            />

          <div className="button-container">
            
              <Boton id="guardarP" type="submit">Guardar</Boton>
              <Boton id="borrarP" type="button" onClick={isClose} className="btn mx-5">Cancelar</Boton>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Stock;
