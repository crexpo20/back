import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
//import '../css/OfertaNueva.css';
import '../css/estilos.css';
export const ModificarNegocio = () => {
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
	const [propietario, cambiarPropietario] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [numero, cambiarNumero] = useState({campo: '', valido: null});
    const [images, setImages] = useState([]);
	const [formularioValido, cambiarFormularioValido] = useState(null);

	const expresiones = {
		direccion: /^[a-zA-Z0-9.|,|#\s]{5,50}$/, // Letras, numeros, guion y guion_bajo.
		propietario: /^[a-zA-ZÀ-ÿ\s]{2,30}$/, // Letras y espacios, pueden llevar acentos.
		descripcion: /^[a-zA-Z0-9!|.|,|(|)|%|#\s]{10,100}$/, //para numeros y letras
		numero: /^(\6|7)?[0-9]{8}$/, // numeros que inician con 6 o 7, y que son de 8 caracteres.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //verificacion de correo
        nombre: /^[a-zA-Z0-9\s]{2,20}$/, //para negocio
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
			nombre.valido === 'true' &&
			direccion.valido === 'true' &&
			propietario.valido === 'true' &&
			correo.valido === 'true' &&
			descripcion.valido === 'true' &&
			numero.valido === 'true'

		){
			cambiarFormularioValido(true);
			cambiarNombre({campo: '', valido: ''});
			cambiarDireccion({campo: '', valido: null});
			cambiarPropietario({campo: '', valido: null});
			cambiarCorreo({campo: '', valido: 'null'});
			cambiarDescripcion({campo: '', valido: null});
			cambiarNumero({campo: '', valido: null});

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

		cambiarNombre("");
		cambiarDireccion("");
		cambiarPropietario("");
		cambiarDescripcion("");
		cambiarCorreo("");
		cambiarNumero("");
		window.location.href = '/home';
	  };

	return (
	 <div class = "home">

        <br/>
			<head>
		<meta http-equiv="Access-Control-Allow-Origin" content="*"></meta>
		</head>
			
			<ContenedorBotonCentrado><h1>Modificar datos del negocio</h1></ContenedorBotonCentrado>
			
		
			
          <br/>

		<main>
			<Formulario action="" onSubmit={onSubmit}>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre del negocio*:"
					placeholder="Super de todos"
					name="nombre"
					leyendaError="El nombre del negocio solo puede contener letras, numeros y espacios, y de 2 a 30 caracteres."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Dirección del negocio*:"
					placeholder="Av America N 290"
					name="direccion"
					leyendaError="La direccion solo puede contener numeros, letras y caracteres especiales como ser: # , . , y de 5 a 50 caracteres"
					expresionRegular={expresiones.direccion}
				/>
				<Input
					estado={propietario}
					cambiarEstado={cambiarPropietario}
					tipo="text"
					label="Nombre del propietario*:"
					name="propietario"
					leyendaError="El nombre del propietario solo puede contener caracteres alfabeticos y un tamaño de 2 a 30 caracteres"
					expresionRegular={expresiones.propietario}
				/>
				
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="correo"
					label="Correo electrónico:*"
					name="correo"
					placeholder="soyalguien1@gmail.com"
					leyendaError="El correo solo puede tener el formato establecido: algo1@algo.com"
					expresionRegular={expresiones.correo}
				/>

                <Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripción*:"
					name="descripcion"
					placeholder="Di algo interesante de tu producto"
					leyendaError="La descripcion debe ser de 10 a 100 caracteres, y contener letras, numeros y caracteres especiales como ser: ! . , ( ) % #"
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					estado={numero}
					cambiarEstado={cambiarNumero}
					tipo="text"
					label="Teléfono*:"
					placeholder="75982610"
					name="numero"
					leyendaError="El telefono solo puede tener 8 caracteres, y empezar con 6 o 7"
					expresionRegular={expresiones.numero}
				/>

				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}
				<ContenedorBotonCentrado>
					<Boton id= "guardarP" type="submit"> Guardar </Boton>
					{formularioValido === true && <MensajeExito>Datos modificados exitosamente!</MensajeExito>}
				
					<Boton id= "borrarP" type="button" onClick={handleReset} className="btn mx-5"> Cancelar </Boton>
				</ContenedorBotonCentrado>
				
			</Formulario>
			<div>
				
				</div>
		</main>
		<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
           <script src='../elementos/modal.js'></script>
        </div>
	);
}
 
//export default ProductoNuevo;