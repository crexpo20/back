import React, {Component, useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import '../css/estilos.css';
//import 'imagesLoad';
import { Modal } from 'react-bootstrap';
import configData from "../config/config.json";
import axios from 'axios';
import { useFormik, useField, useFormikContext } from "formik";


export const ProductoNuevo = () =>{
	

	//const PRODUCTOS_URL = configData.PRODUCTOS_API_URL || "http://127.0.0.1:8000/api/api_productos";
	const [open, setOpen] = React.useState(false);
	const [alertColor, setAlertColor] = useState('');
	const [alertContent, setAlertContent] = useState('');
    //variables de entrada: campo: "valor" , null "validacion de formulario"
	const [producto, cambiarProducto] = useState({campo: '', valido: null});
	const [codigo, cambiarCodigo] = useState({campo: '', valido: null});
	const [categoria, cambiarCategoria] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
	const [marca, cambiarMarca] = useState({campo: '', valido: null});
	const [images, setImages] = useState([]);
	const [formularioValido, cambiarFormularioValido] = useState(null);
	const imagePreview = document.getElementById('img-preview');
	
    const URL_PRODUCTO = "http://127.0.0.1:8000/api/postProductos";
	
	const expresiones = {
		descripcion: /^[a-zA-Z]{1,2}([a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{9,98})$/, // Letras, numeros, guion y guion_bajo.
		producto: /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ0-9\s]{1,28})$/, // Letras y espacios, pueden llevar acentos.
		marca: /^[a-zA-Z]{1,2}([a-zA-Z0-9\s]{1,13})$/, //para numeros y letras
		codigo: /^\d{1,10}$/, // 1 a 10 numeros.
		precio:/^(?!0(\.0{1,2})?$)(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?$/, // Numeros decimales, de uno a cuatro antes el punto y solo dos decimales despues.
		categoria: /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ0-9\s]{1,18})$/, // Letras y espacios, pueden llevar acentos.
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
	 /* const { handleSubmit, resetForm, values, touched} = useFormik({
        initialValues: {
            producto: '',
            codigo: '',
            categoria: '',
            descripcion: '',
            precio: '',
			marca: '',
        },

        //validationSchema: formValidationSchema,

        onSubmit: (values, { setSubmitting, resetForm }) => {
            registrarProducto();

            setSubmitting(true);
            setTimeout(() => {
                //resetForm();
                setSubmitting(false);
            }, 4000);
        },
    });*/
	// asignacion de variables de entrada a variable de BD
	/*const newProducto={
		producto: producto.campo,
		marca: marca.campo,
		descripcion: descripcion.campo,
		precio: precio.campo,
		image: images.values,
		codcat: 12,
		
	}*/

	const postProducto = async (url, newProducto) => {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newProducto),
            headers: {
				
                'Content-Type': 'application/json'
            }
			
        });

        return response;
    }

	
	const onSubmit = async(e) => {
		e.preventDefault();
		console.log(imagePreview.src);
		if(
			producto.valido === 'true' &&
			codigo.valido === 'true' &&
			categoria.valido === 'true' &&
			descripcion.valido === 'true' &&
			precio.valido === 'true' &&
			marca.valido === 'true'

		){ /*mismo del controller*/
			const newProducto={
				//consul log
				producto: producto.campo,
				marca: marca.campo,
				descripcion: descripcion.campo,
				precio: precio.campo,
				image: imagePreview.src,
				codcat: 1,
				
			}
			/*const respuestaJson = await postProducto(URL_PRODUCTO, newProducto);
			console.log("Response:------> " + respuestaJson.status);*/
         
			await axios.post("http://127.0.0.1:8000/api/postProductos", newProducto);


			cambiarFormularioValido(true);
			cambiarProducto({campo: '', valido: ''});
			cambiarCodigo({campo: '', valido: null});
			cambiarCategoria({campo: '', valido: null});
			cambiarDescripcion({campo: '', valido: null});
			cambiarPrecio({campo: '', valido: null});
			cambiarMarca({campo: '', valido: null});
            
			window.alert('¡Producto guardado exitosamente!');
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

	  //Realizamos un POST a la API de productos en backend
	/*const postProducto = async (url, datos) => {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(datos),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return response;
	}*/

	//construimos una boleta con los datos introducidos

	/*const registrarProducto = async () => {
		const datos = {
			"nombrepr": producto,
			"marca": marca,
			"descripcion": descripcion,
			"precioVenta": precio,

		}

		console.log("Producto: ------> " + JSON.stringify(datos));

		const respuestaJson = await postProducto(PRODUCTOS_URL, datos);
		borrar();
		//Validadando si se envio correctamente o hubo algun fallo
		console.log("Response:------> " + respuestaJson.status);
		if (respuestaJson.status === 200) {
			setAlertColor("success");
			setAlertContent(configData.MENSAJE_CREACION_DE_PRODUCTO_CON_EXITO);
			setOpen(true);
		}

		if (respuestaJson.status === 400) {
			var errorRes = await respuestaJson.json();
			console.log("Error Response---" + JSON.stringify(errorRes));

			if (errorRes.errorCode === "23505") {
				setAlertColor("error");
				setAlertContent(configData.MENSAJE_CREACION_DE_PRODUCTO_CON_CODIGO_TRANS_DUPLICADA);
				setOpen(true);
			}
		}
	}*/

	function borrar() {
        //document.getElementById("comprobantePago").value = "";
        cambiarProducto("");
		cambiarCodigo("");
		cambiarCategoria("");
		cambiarDescripcion("");
		cambiarPrecio("");
		cambiarMarca("");
    }

	return (
     <center>
		<head>
		<meta http-equiv="Access-Control-Allow-Origin" content="http://localhost:3000/"/>
		
		</head>
	 <div class="home">
	 
	 			
        <br/>
		<head>
		<meta http-equiv="Access-Control-Allow-Origin" content="*"></meta>
		</head>	
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
					leyendaError="El nombre debe contener de 2 a 20 caracteres entre números, letras y espacios."
					expresionRegular={expresiones.producto}
				/>
				<Input
					estado={codigo}
					cambiarEstado={cambiarCodigo}
					tipo="text"
					label="Código*:"
					placeholder="283755"
					name="codigo"
					leyendaError="El código solo puede contener números enteros positivos y un máximo de 10 dígitos."
					expresionRegular={expresiones.codigo}
				/>
				<Input
					estado={categoria}
					cambiarEstado={cambiarCategoria}
					tipo="text"
					label="Categoría*:"
					name="categoria"
					leyendaError="La categoría solo debe ser una de las propuestas."
					expresionRegular={expresiones.categoria}
				/>
				
				<Input
					estado={descripcion}
					cambiarEstado={cambiarDescripcion}
					tipo="text"
					label="Descripción*:"
					name="descripcion"
					placeholder="Di algo interesante de tu producto"
					leyendaError="La descripción debe ser de 10 a 100 caracteres, y contener letras, números y caracteres especiales como ser: _ - ! % ()"
					expresionRegular={expresiones.descripcion}
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
					estado={marca}
					cambiarEstado={cambiarMarca}
					tipo="text"
					label="Marca*:"
					placeholder="Pil andina"
					name="marca"
					leyendaError="La marca solo debe tener caracteres numéricos y letras, y entre 2 a 15 caracteres."
					expresionRegular={expresiones.marca}
				/>

			     	
			    <div class="container">
        
       				<div class="card">
            			<img id="img-preview"/>
            				<div class="card-footer">
                				<input accept="image/png,image/jpg" type="file" id="img-uploader" className='img-upload' required ></input>
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
					<Boton id= "guardarP" type="submit" onClick={onSubmit}> Guardar </Boton>
				
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
 