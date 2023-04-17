import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {ContenedorBotonCentrado} from '../elementos/Formularios';
import '../css/EliminarP.css';
//dentro de la funcion return va el codigo que se va a ejecutar
export const EliminarProducto = () => {

  const [productos, setProductos] = useState([
    { id: 1, nombre: 'CocaCola 3L', seleccionado: false },
    { id: 2, nombre: 'Fanta 3L', seleccionado: false },
    { id: 3, nombre: 'Sprite 3L', seleccionado: false },
    { id: 4, nombre: 'Swichdawner', seleccionado: false },
  ]);
  const [productoEliminado, setProductoEliminado] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const productosAEliminar = productos.filter((producto) => producto.seleccionado);

    if (productosAEliminar.length > 0) {
      if (
        window.confirm(
          `¿Está seguro que desea eliminar los siguientes productos: ${productosAEliminar
            .map((producto) => producto.nombre)
            .join(', ')}?`
        )
      ) {
        // Lógica de eliminación de productos
        const nuevosProductos = productos.filter((producto) => !producto.seleccionado);
        setProductos(nuevosProductos);
        setProductoEliminado(true);
      }
    } else {
      window.alert('Debe seleccionar al menos un producto para eliminar.');
    }
  };

  const handleReset = () => {
    setProductos(productos.map((producto) => ({ ...producto, seleccionado: false })));
    window.location.href = '/home';
  };

  const handleProductoSelection = (id) => {
    setProductos(
      productos.map((producto) => {
        if (producto.id === id) {
          return { ...producto, seleccionado: !producto.seleccionado };
        }
        return producto;
      })
    );
  };

  const handleVolver = () => {
    setProductoEliminado(false);
  };

  return (
    <center >
    
    <div class = "home">
   <section> <h1>Eliminar Producto</h1>
    <br />
    <p style={{textAlign:"justify"}} >Seleccione los productos que desea eliminar</p>
     </section>
     
     <section>
      {productoEliminado ? (
        <Modal show={productoEliminado} onHide={handleVolver}>
          <Modal.Header >
            
          </Modal.Header>
          <Modal.Body className="text-center">
            <p>Se ha eliminado <br/> el (los) producto(s) con éxito</p>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button variant='primary' onClick={handleVolver}>
              Volver
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        
        <form className=' text-center' onSubmit={handleSubmit}>
          <br/>


          <ContenedorBotonCentrado><h1>Eliminar Producto</h1></ContenedorBotonCentrado>

          <br/>

          
          <div className='row align-items-start'>
            <div className='col'>
              <ul className='list-group'>
                {productos.map((producto) => (
                  <li key={producto.id} className='list-group-item'>
                    <div className='form-check'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        value={producto.seleccionado}
                        onChange={() => handleProductoSelection(producto.id)}
                      />
                      <label className='form-check-label' htmlFor='flexCheckDefault'>
                        {producto.nombre}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
      <footer>
      <button type='submit' className='btn btn-primary mx-5' id='Eliminar'>
        Eliminar
      </button>
      <button type='button' onClick={handleReset} id='borrar' className='btn btn-danger mx-5'>
        Cancelar
      </button>
      </footer>
      </div>
    </form>
    
  )}</section>
</div>
</center>
)   
}