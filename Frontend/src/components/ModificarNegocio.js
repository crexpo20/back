import React, {useState,state, useEffect} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
//import '../css/OfertaNueva.css';
import '../css/estilos.css';
import Swal from 'sweetalert2';
import axios from 'axios';

export const ModificarNegocio = () => {
    


	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
	const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
	const [propietario, cambiarPropietario] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [numero, cambiarNumero] = useState({campo: '', valido: null});
    const [images, setImages] = useState([]);
	const [formularioValido, cambiarFormularioValido] = useState(null);
	const [negocio, setNegocio] = useState([]);
	
	const imagePreview = document.getElementById('img-preview');

	const expresiones = {
		direccion: /^[a-zA-Z]{1,2}([a-zA-Z0-9.|,|#\s]{14,48})$/, // Letras, numeros, guion y guion_bajo.
		propietario: /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ\s]{9,48})$/, // Letras y espacios, pueden llevar acentos.
		descripcion: /^[a-zA-Z]{1,2}([a-zA-Z0-9!|.|,|(|)|%|#\s]{9,98})$/, //para numeros y letras
		numero: /^(\6|7)?[0-9]{8}$/, // numeros que inician con 6 o 7, y que son de 8 caracteres.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //verificacion de correo
        nombre: /^[a-zA-Z]{1,2}([a-zA-Z0-9\s]{1,28})$/, //para negocio
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

	/*const getNegocio = async() => {
        await axios.get('http://127.0.0.1:8000/api/getTiendas')
        .then(res=>{
            this.setState({negocio : res.data.negocio});
            console.log(res.data.negocio)
        }).catch((error)=>{
            console.log(error);
        });
    }*/

	const getNegocio = async() => {
        await axios.get('http://127.0.0.1:8000/api/getTiendas')
        .then(res => {
          this?.setState([res.data.tienda]);
          const data = res.data
          console.log(res.data);
          setNegocio(data)
        }).catch((error) => {
          console.log(error);    
        });
    };

	useEffect( ()=>{
        getNegocio();
    }, []);


	const Negocio = () => {
		getNegocio();
		direccion = negocio;
		//direccion = direccion.dir;
	}
	
	const onSubmit = (e) => {
		
		e.preventDefault();
		console.log(imagePreview.src);

		document.getElementById("img-uploader").enctype = "multipart/form-data";
		if(imagePreview.src==""){
			if(
				nombre.valido === 'true' &&
				direccion.valido === 'true' &&
				propietario.valido === 'true' &&
				correo.valido === 'true' &&
				descripcion.valido === 'true' &&
				numero.valido === 'true'
			){
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No subiste ninguna imagen...',
					//footer: '<a href="">Why do I have this issue?</a>'
				})
			}else{
				if(onSubmit){
					cambiarFormularioValido(false);
				}
			}
		}else{
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
				imagePreview.src= '';
				document.ready = document.getElementById("img-uploader").value = "";
				document.ready = document.getElementById("img-upload-bar").value = '0';
				document.ready = document.getElementById("img-preview").value = "";
				document.ready = document.getElementsByClassName("card").item = '';

				const newNegocio={
					//consul log
					nombre: nombre.campo,
					direccion: direccion.campo,
					propietario: propietario.campo,
					correo: correo.campo,
					descripcion: descripcion.campo,
					numero: numero.campo,
					image: imagePreview.src,
				}



				Swal.fire({
					icon: 'success',
					title: '¡Genial!',
					text: '¡Datos actualizados exitosamente!',
					//footer: '<a href="">Why do I have this issue?</a>'
				})

					// ... 
			} else {
				cambiarFormularioValido(false);
			}
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

		//Negocio();
		cambiarNombre("");
		cambiarDireccion("");
		cambiarPropietario("");
		cambiarDescripcion("");
		cambiarCorreo("");
		cambiarNumero("");
		window.location.href = '/home';
	  };
	

	/*const tienda = () => {
		getNegocio();
		nombre = getNegocio.nombre;
		direccion = setNegocio;
		propietario = negocio.propietario;
		descripcion = negocio.descripcion;
		correo = negocio.correo;
		numero = negocio.numero;

		console.log(negocio);
	}*/
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
					//value= "negocio.nombre"
					leyendaError="El nombre del negocio solo puede contener letras, números y espacios, y de 2 a 30 caracteres."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={direccion}
					cambiarEstado={cambiarDireccion}
					tipo="text"
					label="Dirección del negocio*:"
					//placeholder="Av America N 290"
					name="direccion"
					//value = "holi"
					leyendaError="La dirección solo puede contener números, letras y caracteres especiales como ser: # , . , y un tamaño de 15 a 50 caracteres."
					expresionRegular={expresiones.direccion}
				/>
				<Input
					estado={propietario}
					cambiarEstado={cambiarPropietario}
					tipo="text"
					label="Nombre del propietario*:"
					name="propietario"
					leyendaError="El nombre del propietario solo puede contener caracteres alfabéticos  y un tamaño de 10 a 50 caracteres."
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
					placeholder="Di algo interesante de tu negocio"
					leyendaError="La descripción debe ser de 10 a 100 caracteres, y contener letras, números y caracteres especiales como ser: ! . , ( ) % #"
					expresionRegular={expresiones.descripcion}
				/>
				<Input
					estado={numero}
					cambiarEstado={cambiarNumero}
					tipo="text"
					label="Teléfono*:"
					placeholder="75982610"
					name="numero"
					leyendaError="El telefono tiene un máximo de 8 caracteres, y empezar con 6 o 7."
					expresionRegular={expresiones.numero}
				/>
				<ContenedorBotonCentrado>	
						<div class="container">
							<center>
								<div class="card" id = "contenedorImagen"  >
									<img id="img-preview"/>
										<div class="card-footer" id = "contenedorImagen">
											<input accept="image/png,image/jpg" type="file" id="img-uploader" className='img-upload'></input>
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
				<center>
					<Boton id= "guardarP" type="submit"> Guardar </Boton>
					{formularioValido === true && <MensajeExito>“La información del negocio se ha modificado de forma correctamente.</MensajeExito>}
					</center>
					<center>
					<Boton id= "borrarP" type="button" onClick={handleReset} className="btn mx-5"> Cancelar </Boton>
					</center>
				
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