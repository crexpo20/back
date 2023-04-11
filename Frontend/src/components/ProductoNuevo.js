import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import '../css/ventanaImagen.css';
import '../js/imagen.js'
//import '../'
//import '../css/OfertaNueva.css';
import '../css/estilos.css';
import '../js/imagesLoad';
import { Modal } from 'react-bootstrap';
export const ProductoNuevo = () => {
	const [producto, cambiarProducto] = useState({campo: '', valido: null});
	const [codigo, cambiarCodigo] = useState({campo: '', valido: null});
	const [categoria, cambiarCategoria] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
	const [marca, cambiarMarca] = useState({campo: '', valido: null});
	const [images, setImages] = useState([]);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		descripcion: /^[a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{10,100}$/, // Letras, numeros, guion y guion_bajo.
		producto: /^[a-zA-ZÀ-ÿ0-9\s]{2,20}$/, // Letras y espacios, pueden llevar acentos.
		marca: /^[a-zA-Z0-9\s]{3,15}$/, //para numeros y letras
		codigo: /^\d{1,10}$/, // 1 a 10 numeros.
		precio: /^[0-9]{1,4}(\.[0-9]{2})$/, // Numeros decimales, de uno a cuatro antes el punto y solo dos decimales despues.
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
			codigo.valido === 'true' &&
			categoria.valido === 'true' &&
			descripcion.valido === 'true' &&
			precio.valido === 'true' &&
			marca.valido === 'true'

		){
			cambiarFormularioValido(true);
			cambiarProducto({campo: '', valido: ''});
			cambiarCodigo({campo: '', valido: null});
			cambiarCategoria({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: 'null'});
			cambiarPrecio({campo: '', valido: null});
			cambiarMarca({campo: '', valido: null});

			// ... 
		} else {
			cambiarFormularioValido(false);
		}

		
	}

	const handleChange = (e) => {
		setImages((images) => [...images, URL.createObjectURL(e.files[0])]);
		return URL.revokeObjectURL(e.files[0])
	}

	const deleteImage = (blob) => {
		setImages(images.filter(x => x !== blob));
	};
	
	const handleReset = () => {

		cambiarProducto("");
		cambiarCodigo("");
		cambiarCategoria("");
		cambiarDescripcion("");
		cambiarPrecio("");
		cambiarMarca("");
		window.location.href = '/home';
	  };

	return (
     <center>
		<head>
		<meta http-equiv="Access-Control-Allow-Origin" content="*"/>
		</head>
	 <div class="home">
	 
	 			
        <br/>
			
			
			<ContenedorBotonCentrado><h1>Registro de Producto</h1></ContenedorBotonCentrado>
			
		
			
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
					estado={codigo}
					cambiarEstado={cambiarCodigo}
					tipo="text"
					label="Codigo*:"
					placeholder="283755"
					name="codigo"
					leyendaError="El codigo solo puede contener numeros."
					expresionRegular={expresiones.codigo}
				/>
				<Input
					estado={categoria}
					cambiarEstado={cambiarCategoria}
					tipo="text"
					label="Categoria*:"
					name="categoria"
					leyendaError="La categoria solo debe ser una de las propuestas"
					expresionRegular={expresiones.categoria}
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
					estado={marca}
					cambiarEstado={cambiarMarca}
					tipo="text"
					label="Marca*:"
					placeholder="Pil andina"
					name="marca"
					leyendaError="La marca solo debe tener caracteres numericos y letras, y entre 3 a 15 caracteres"
					expresionRegular={expresiones.marca}
				/>

			     	
<div class="container">
        
        <div class="card">
            <img id="img-preview"/>
            <div class="card-footer">
                <input type="file" id="img-uploader"/>
                <progress id="img-upload-bar" value="0" max="100"></progress>
            </div>
        </div>

    </div>

        
             

				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton id= "guardarP" type="submit"> Guardar </Boton>
					{formularioValido === true && <MensajeExito>Producto guardado exitosamente!</MensajeExito>}
				
					<Boton id= "borrarP" type="button" onClick={handleReset} className="btn mx-5"> Cancelar </Boton>
				</ContenedorBotonCentrado>
				
			</Formulario>
			
			<div>
				
				</div>

	
		</main>
		<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
       </div>
		</center>
	);
}
 
//export default ProductoNuevo;