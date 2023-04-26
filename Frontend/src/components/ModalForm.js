import React, { useState } from "react";
import {Formulario,ContenedorBotonCentrado} from '../elementos/Formularios';
import {FormularioModificarProducto, Label, ContenedorTerminos, Boton, MensajeExito, MensajeError} from '../elementos/MiniForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import '../css/estilos.css';
import '../js/imagesLoad';
import Swal from 'sweetalert2';

function ModalForm({ isOpen, onClose }) {
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  	const [producto, cambiarProducto] = useState({campo: '', valido: null});
	const [codigo, cambiarCodigo] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [precioCompra, cambiarPrecioCompra] = useState({campo: '', valido: null});
  	const [precioVenta, cambiarPrecioVenta] = useState({campo: '', valido: null});
  	const [vencimiento, cambiarVencimiento] = useState({campo: '', valido: null});
	const [images, setImages] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
	const [marca, cambiarMarca] = useState({campo: '', valido: null});
 
  const expresiones = {
		descripcion: /^[a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{10,100}$/, // Letras, numeros, guion y guion_bajo.
		producto: /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ0-9\s]{1,18})$/, // Letras y espacios, pueden llevar acentos.
		codigo: /^\d{1,10}$/, // 1 a 10 numeros.
		marca: /^[a-zA-Z]{1,2}([a-zA-Z0-9\s]{1,13})$/, //para numeros y letras
		precio:/^(?!0(\.0{1,2})?$)(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?$/, // Numeros decimales, de uno a cuatro antes el punto y solo dos decimales despues.
	}

  const handleReset = () => {
  
    if((precioCompra||producto||vencimiento||precioVenta||descripcion||images||codigo) != ''){
      const confirmacion = window.confirm('¿Está seguro de que desea realizar esta acción?');
    if (confirmacion) {
    window.alert('Acción realizada exitosamente');
    cambiarProducto("");
    cambiarMarca("");
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
			marca.valido === 'true' &&
            precioVenta.valido === 'true' &&
            images !='' && 
            vencimiento != ''

		){
			cambiarFormularioValido("");
      
			cambiarProducto({campo: '', valido: ''});
			cambiarCodigo({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: 'null'});
			cambiarMarca({campo: '', valido: null});
			Swal.fire({
				icon: 'success',
				title: '¡Genial!',
				text: '¡Datos guardados exitosamente!',
				//footer: '<a href="">Why do I have this issue?</a>'
			})
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
		  <ContenedorBotonCentrado> <h2>Modificar datos</h2></ContenedorBotonCentrado>
        <Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={producto}
					cambiarEstado={cambiarProducto}
					tipo="text"
					label="Nombre*:"
					placeholder="Cereal en caja 500gr"
					name="producto"
					leyendaError="El nombre solo puede contener letras, números y espacios, y un tamaño de 2 a 20 caracteres."
					expresionRegular={expresiones.producto}
				/>
				<Input
					estado={codigo}
					cambiarEstado={cambiarCodigo}
					tipo="text"
					label="Código de producto*:"
					placeholder="283755"
					name="codigo"
					leyendaError="El código solo puede contener números."
					expresionRegular={expresiones.codigo}
				/>
				
				<Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripción*:"
					name="descripcion"
					placeholder="Di algo interesante de tu negocio"
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
					leyendaError="El precio solo puede contener números, un carácter especial (.) y dos decimales"
					expresionRegular={expresiones.precio}
				/>
				<div>
						<label id = "label_cat"><b>
							Categoría*:
						</b></label>

						<select name="select" id = "select_categorias"

						>
							<option  id = "valor_inicial" value="0" disabled selected>Seleccione la categoría:</option>

							<option value="1">Abarrotes</option>
							<option value="2">Bebidas</option>
							<option value="3">Bebidas alcoholicas</option>
							<option value="4">Cuidado personal</option>
							<option value="5">Enlatados</option>
							<option value= "6">Farmacos</option>
							<option value="7">Fiambres y embutidos</option>
							<option value="8">Golosinas</option>
							<option value="9">Limpieza del hogar</option>
							<option value="10">Lacteos</option>
							<option value="11">Panaderia</option>
							<option value="12">Snacks</option>
							<option value="13">Varios</option>
						</select>
					</div>
				
					<Input
						estado={marca}
						cambiarEstado={cambiarMarca}
						tipo="text"
						label="Marca*:"
						placeholder="Pil andina"
						name="marca"
						leyendaError="La marca solo debe tener caracteres numéricos y letras, y entre 2 a 15 caracteres."
						expresionRegular={expresiones.marca}
					/>
					<ContenedorBotonCentrado>
					<label >Imagen*:</label>
					 <div class="container">
							<center >
								<div class="card" id = "contenedorImagen"  >
									<img id="img-preview"/>
										<div class="card-footer" id = "contenedorImagen">
											<input accept="image/png,image/jpg" type="file" id="img-uploader" className='img-upload' required  = "true"></input>
											<progress id="img-upload-bar" value="0" max="100" ></progress>
										</div>
								</div>
							</center>
						</div>
						</ContenedorBotonCentrado>
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				
				</MensajeError>}
					

					
					{formularioValido === true && <MensajeExito>Producto guardado exitosamente!</MensajeExito>}
				
				  <center>
				  <Boton id= "guardarP" type="submit" > Guardar </Boton>
				  </center>
				  <center>
					<Boton id= "borrarP" type="button" onClick={handleReset} className="btn mx-5"> Cerrar </Boton>
					</center>
				
			</Formulario>
           
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
            background-color: rgba(85, 85, 85, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
    </>
  );
}

export default ModalForm;
