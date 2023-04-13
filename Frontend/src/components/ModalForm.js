import React, { useState } from "react";

import {FormularioModificarProducto, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/MiniForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import '../css/estilos.css';
import '../js/imagesLoad';

function ModalForm({ isOpen, onClose }) {
  const [producto, cambiarProducto] = useState({campo: '', valido: null});
	const [codigo, cambiarCodigo] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [precioCompra, cambiarPrecioCompra] = useState({campo: '', valido: null});
  const [precioVenta, cambiarPrecioVenta] = useState({campo: '', valido: null});
  const [vencimiento, cambiarVencimiento] = useState({campo: '', valido: null});
	const [images, setImages] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
 
  const expresiones = {
		descripcion: /^[a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{10,100}$/, // Letras, numeros, guion y guion_bajo.
		producto: /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ0-9\s]{1,18})$/, // Letras y espacios, pueden llevar acentos.
		codigo: /^\d{1,10}$/, // 1 a 10 numeros.
		precio:/^(?!0(\.0{1,2})?$)(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?$/, // Numeros decimales, de uno a cuatro antes el punto y solo dos decimales despues.
	}

  const handleReset = () => {
  
    if((precioCompra||producto||vencimiento||precioVenta||descripcion||images||codigo) != ''){
      const confirmacion = window.confirm('¿Está seguro de que desea realizar esta acción?');
    if (confirmacion) {
    window.alert('Acción realizada exitosamente');
    cambiarProducto("");
    cambiarPrecioCompra("");
    cambiarCodigo("");
    cambiarPrecioVenta("");
    cambiarVencimiento("");
    cambiarDescripcion("");
    setImages("");
    onClose()
    cambiarFormularioValido("");
    } else {
      window.alert('Acción cancelada');
    }
    }else{
      onClose()
    }
    
  };


  const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  const hoy = new Date();

  // Agregar un año a la fecha actual
  const maxFecha = new Date(hoy.getFullYear() + 1, hoy.getMonth(), hoy.getDate()).toISOString().split('T')[0];



  const onSubmit = (e) => {
		e.preventDefault();

		if(
			producto.valido === 'true' &&
			codigo.valido === 'true' &&
			descripcion.valido === 'true' &&
			precioCompra.valido === 'true' &&
            precioVenta.valido === 'true' &&
            images !='' && 
            vencimiento != ''

		){
			cambiarFormularioValido("");
      
			cambiarProducto("");
			cambiarPrecioCompra("");
			cambiarCodigo("");
			cambiarPrecioVenta("");
			cambiarVencimiento("");
			cambiarDescripcion("");
			setImages("");
           window.alert('Producto modificado exitosamente');
			onClose()

			// ... 
		} else {
			cambiarFormularioValido(false);
		}

		
	}

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modificar datos</h2>
        <FormularioModificarProducto action="" onSubmit={onSubmit}>
				<Input
					estado={producto}
					cambiarEstado={cambiarProducto}
					tipo="text"
					label="Nombre*:"
					placeholder="Cereal en caja 500gr"
					name="producto"
					leyendaError="El nombre solo puede contener letras, numeros y espacios, y de 2 a 20 caracteres."
					expresionRegular={expresiones.producto}
				/>
				<Input
					estado={codigo}
					cambiarEstado={cambiarCodigo}
					tipo="text"
					label="Código de producto*:"
					placeholder="283755"
					name="codigo"
					leyendaError="El codigo solo puede contener numeros."
					expresionRegular={expresiones.codigo}
				/>
				
				<Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripción*:"
					name="descripcion"
					placeholder="Di algo interesante de tu producto"
					leyendaError="La descripcion debe ser de 10 a 100 caracteres, y contener letras, numeros y caracteres especiales como ser: _ - ! % ()"
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					estado={precioVenta}
					cambiarEstado={cambiarPrecioVenta}
					tipo="text"
					label="Precio de venta:*"
					name="precio"
					placeholder="23.00"
					leyendaError="El precio solo puede contener numeros, un caracter especial (.) y dos decimales"
					expresionRegular={expresiones.precio}
				/>
        <div  className='col' id= "calendar">
        
            <label 
              htmlFor="vencimiento">
               <b> Fecha de vencimiento*: </b>
            </label>
            <input 
              type="date" 
              className="form-control " 
              name="ini" 
              min={formattedDate} 
              max={maxFecha} 
              id="vencimiento" 
              placeholder='fecha-inicio*'
              required 
              value={vencimiento} 
              color= "transparent"
              margin = "1"
              border-bottom-color = "#000000"
              onChange={(e) => cambiarVencimiento(e.target.value)} />
            <br />

        </div>
				
                <Input
					estado={precioCompra}
					cambiarEstado={cambiarPrecioCompra}
					tipo="text"
					label="Precio de compra:*"
					name="precio"
					placeholder="23.00"
					leyendaError="El precio solo puede contener numeros, un caracter especial (.) y dos decimales"
					expresionRegular={expresiones.precio}
				/>
			     	
				<div class="container">
        
        <Input
					estado={images}
					cambiarEstado={setImages}
					tipo="file"
					label="Imagen:*"
					name="imagen"
					leyendaError="El precio solo puede contener numeros, un caracter especial (.) y dos decimales"
					
				/>
    			</div>

				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				
				</MensajeError>}
				<ContenedorBotonCentrado>
					

					{formularioValido === true && <MensajeExito>Producto guardado exitosamente!</MensajeExito>}
				  <Boton id= "guardarP" type="submit"> Guardar </Boton>
					<Boton id= "borrarP" type="button" onClick={handleReset} className="btn mx-5"> Cerrar </Boton>
				</ContenedorBotonCentrado>
				
			</FormularioModificarProducto>
           
          </div>
          
        </div>
      )}

      <style>
        {`
          .modal {
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </>
  );
}

export default ModalForm;
