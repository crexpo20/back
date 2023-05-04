import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import '../css/ventanaImagen.css';
//import '../'
import '../css/OfertaNueva.css';
import '../css/estilos.css';
import Swal from 'sweetalert2';
import axios from 'axios';

export const NuevaOferta = () => {
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
	const [producto, cambiarProducto] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
	const [inicio, cambiarInicio] = useState({campo: '', valido: null});
	const [fin, cambiarFin] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);

  
    const today = new Date();
    const formattedDate = today.toISOString().slice(0, 10);
    const hoy = new Date();

    // Agregar un año a la fecha actual
    const maxFecha = new Date(hoy.getFullYear() + 1, hoy.getMonth(), hoy.getDate()).toISOString().split('T')[0];
   

  

	const expresiones = {
		descripcion: /^[a-zA-Z]{1,2}([a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{9,98})$/, // Letras, numeros, guion y guion_bajo.
		producto: /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ0-9\s]{1,28})$/, // Letras y espacios, pueden llevar acentos.
		//marca: /^[a-zA-Z0-9\s]{3,15}$/, //para numeros y letras
		//codigo: /^\d{1,10}$/, // 1 a 10 numeros.
		precio:/^(?!0(\.0{1,2})?$)(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?$/, // Numeros decimales, de uno a cuatro antes el punto y solo dos decimales despues.
	}

    /*const handleSubmit = (event) => {
        event.preventDefault();
       
      
      
        handleReset();
      };
    
      const handleReset = () => {
        setNombre("");
          setCategoria("");
          setPrecio("");
          setCodigo("");
          setMarca("");
          setDescripcion("");
        
        window.location.href = '/home';
      };*/
  
      /*const postOferta = async (url, newOferta) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newProducto),
            headers: {
				
                'Content-Type': 'application/json'
            }
			
        });

        return response;
      }*/

  
	const onSubmit = async(e) => {
		e.preventDefault();

		if(
			producto.valido === 'true' &&
      descripcion.valido === 'true' &&
			precio.valido === 'true' &&
			inicio != null &&
			fin != null
			
		){


			cambiarFormularioValido(true);
			cambiarProducto({campo: '', valido: null});
      cambiarDescripcion({campo: '', valido: null});
			cambiarPrecio({campo: '', valido: null});
      cambiarInicio("");
        cambiarFin("");
			
      Swal.fire({
				icon: 'success',
				title: '¡Genial!',
				text: '¡Oferta guardada exitosamente!',
				//footer: '<a href="">Why do I have this issue?</a>'
			})

			// ... 
		} else {
			cambiarFormularioValido(false);
		}

		
	}

	const handleSubmit = (event) => {
    event.preventDefault();
    if(
			producto.valido === 'true' &&
			inicio != '' &&
			fin != '' &&
			descripcion.valido === 'true' &&
			precio.valido === 'true'

		){
			cambiarFormularioValido(true);
			 cambiarProducto("");
        cambiarPrecio("");
        cambiarInicio("");
        cambiarFin("");
        cambiarDescripcion("");
        
        Swal.fire({
          icon: 'success',
          title: '¡Genial!',
          text: '¡Oferta guardada exitosamente!',
          //footer: '<a href="">Why do I have this issue?</a>'
        })

			// ... //*ñiiñíñíñíñíñíñíñíñíñíñíñííññiñíñíñíñíñíñíñíñíñíníiññíñíñíñííñiññíñíñíñíñíñíiniññíiñíñiñiñiñiñiñiñiññíñí*/ */
		} else {
			cambiarFormularioValido(false);
		}
  };
      const handleReset = () => {
  
        if((precio||producto||inicio||fin||descripcion) != ""){
          Swal.fire({
            title: '¿Estás seguro de cancelar?',
            text:"¡No podrás recuperar los datos!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Si!',
            cancelButtonText: '¡No!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '¡Cancelado!',
                '¡Acción realizada exitosamente!',
                'success'
              )
              cambiarProducto({campo: '', valido: ''});
              cambiarPrecio({campo: '', valido: ''});
              cambiarInicio("");
              cambiarFin("");
              cambiarDescripcion({campo: '', valido: ''});
              window.location.href = '/home';
            }
          })
            } else {
              window.alert('Acción cancelada');
            }
        
      };
    
	return (
    <div class = "home">
        <br/>
			
			
			<ContenedorBotonCentrado><h1>Registro de Oferta Nueva</h1></ContenedorBotonCentrado>
			
		
			
          <br/>

		<main>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={producto}
					cambiarEstado={cambiarProducto}
					tipo="text"
					label="Producto*:"
					placeholder="Cereal en caja 500gr"
					name="producto"
					leyendaError="El producto solo puede contener letras, números y espacios, y de 2 a 30 caracteres."
					expresionRegular={expresiones.producto}
          
				/>
				
        <Input
					estado={precio}
					cambiarEstado={cambiarPrecio}
					tipo="text"
					label="Precio de venta:*"
					name="precio"
					placeholder="23.00"
					leyendaError="El precio solo puede contener números enteros o si se quiere ingresar un número decimal se puede poner un carácter especial (.) y dos decimales."
					expresionRegular={expresiones.precio}
				/>

				<Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripción*:"
					name="descripcion"
					placeholder="Describe tu oferta"
					leyendaError="La descripción debe ser de 10 a 100 caracteres, y contener letras, números y caracteres especiales como ser: _ - ! % ()"
					expresionRegular={expresiones.descripcion}
				/>
				
				  <div 
              className='col' id= "calendar">
            <label 
              htmlFor="inicio">
               <b> Inicio de Oferta*: </b>
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
              value={inicio} 
              color= "transparent"
              margin = "1"
              border-bottom-color = "#000000"
              onChange={(e) => cambiarInicio(e.target.value)} />
            <br />

            <label 
              htmlFor="fin">
               <b> Fin de Oferta*: </b>
            </label>
            <input 
              type= "date" 
              className="form-control "  
              min={inicio} 
              max={maxFecha} 
              id="vencimiento" 
              placeholder='fecha-fin*'
              
              required 
              value={fin} 
              onChange={(e) => cambiarFin(e.target.value)} 
            />
            <br />
            
          </div>
          {formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				
				<center>
					<Boton id= "guardarP" type="submit"> Guardar </Boton>
					</center>
          <center>
					<Boton id= "borrarP" type="button" onClick={handleReset} className="btn mx-5"> Cancelar </Boton>
          </center>
				
			</Formulario>

		 
		</main>
           
        </div>
	);
}
