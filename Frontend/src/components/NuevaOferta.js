import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import '../css/ventanaImagen.css';
//import '../'
import '../css/OfertaNueva.css';
import '../css/estilos.css';
export const NuevaOferta = () => {
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
		descripcion: /^[a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{10,100}$/, // Letras, numeros, guion y guion_bajo.
		producto: /^[a-zA-ZÀ-ÿ0-9\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
		//marca: /^[a-zA-Z0-9\s]{3,15}$/, //para numeros y letras
		//codigo: /^\d{1,10}$/, // 1 a 10 numeros.
		precio:/^(?!0(\.0{1,2})?$)(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?$/
    , // Numeros decimales, de uno a cuatro antes el punto y solo dos decimales despues.
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
      
	const onSubmit = (e) => {
		e.preventDefault();

		if(
			producto.valido === 'true' &&
			inicio.valido === 'true' &&
			fin.valido === 'true' &&
			descripcion.valido === 'true' &&
			precio.valido === 'true'
		){
			cambiarFormularioValido(true);
			cambiarProducto({campo: '', valido: ''});
			cambiarInicio({campo: '', valido: null});
			cambiarFin({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: 'null'});
			cambiarPrecio({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}

		
	}

	const handleSubmit = (event) => {
        event.preventDefault();
        window.alert('Acción realizada exitosamente');
        cambiarProducto("");
        cambiarPrecio("");
        cambiarInicio("");
        cambiarFin("");
        cambiarDescripcion("");
        window.location.href = '/home';
      };
      const handleReset = () => {
  
        if((precio||producto||inicio||fin||descripcion) != ""){
          const confirmacion = window.confirm('¿Está seguro de que desea realizar esta acción?');
        if (confirmacion) {
          window.alert('Acción realizada exitosamente');
        cambiarProducto("");
        cambiarPrecio("");
        cambiarInicio("");
        cambiarFin("");
        cambiarDescripcion("");
        window.location.href = '/home';
        } else {
          window.alert('Acción cancelada');
        }
        }else{
          window.location.href = '/home';
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
					leyendaError="El nombre solo puede contener letras, numeros y espacios, y de 2 a 20 caracteres."
					expresionRegular={expresiones.producto}
				/>
				
                <Input
					estado={precio}
					cambiarEstado={cambiarPrecio}
					tipo="text"
					label="Precio de venta:*"
					name="precio"
					placeholder="23.00"
					leyendaError="El precio solo puede contener numeros, un caracter especial (.) y dos decimales"
					expresionRegular={expresiones.precio}
				/>

				<Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripcion*:"
					name="descripcion"
					placeholder="Di algo interesante de tu negocio"
					leyendaError="La descripcion debe ser de 10 a 100 caracteres, y contener letras, numeros y caracteres especiales como ser: _ - ! % ()"
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
              id="inicio" 
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
              id="fin" 
              placeholder='fecha-fin*'
              
              required 
              value={fin} 
              onChange={(e) => cambiarFin(e.target.value)} />
            <br />
            
            </div>
            
				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton id= "guardarP" type="submit"> Guardar </Boton>
					{formularioValido === true && <MensajeExito>Nueva oferta guardada exitosamente!</MensajeExito>}
				
					<Boton id= "borrarP" type="button" onClick={handleReset} className="btn mx-5"> Cancelar </Boton>
				</ContenedorBotonCentrado>
				
			</Formulario>
			<div>
				
				</div>

		 
		</main>
           
        </div>
	);
}
 
//export default ProductoNuevo;