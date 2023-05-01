import React, { useState } from 'react'
import '../css/ListaDeProducto.css';
import iconoModificar from '../images/iconoModificar.png';
import ModificarProducto from './ModificarProducto';
import Button from '../elementos/Button';
import ModalForm from './ModalForm';
import Stock from './Stock';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const ListaDeProducto = () => {
  const [productos, setProductos] = useState([
    { nombre: "Sprite 3L", cantidad: 10 },
    { nombre: "Pepsi 3L", cantidad: 15 },
    { nombre: "Fanta 3L", cantidad: 5 },
    { nombre: "CocaCola 3L", cantidad: 20 }
  ]);
  const [showModal, setShowModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const openModal = (producto) => {
    setProductoSeleccionado(producto);
    setShowModal(true);
  };

  const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsOpen(false);
    };

  const volver = () => {      
    window.location.href = '/home';
  };
  
  return (
    <section class="home">
      <div id='lista'>
        <h1 id='titulo'>Lista de Productos</h1>
      </div>
      <div className='row' id='listap'>
        <div className='col' >
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Cantidad(uds)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>
                    <Button onClick={handleOpenModal} className ='button'/>
                    <ModalForm isOpen={isOpen} onClose={handleCloseModal} />
                    <a onClick={() => openModal(producto)}> <AddCircleOutlineIcon/> </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <button id="volverHome" className="btn" onClick={volver}>Volver</button>
      {showModal && (
        <Stock
          isClose={() => setShowModal(false)}
          producto={productoSeleccionado}
          actualizarProducto={(producto, cantidad) => {
            const nuevosProductos = productos.map((p) => {
              if (p.nombre === producto.nombre) {
                return { ...p, cantidad: p.cantidad + cantidad };
              } else {
                return p;
              }
            });
            setProductos(nuevosProductos);
          }}
        />
      )}
    </section>
  );
};

export default ListaDeProducto;
