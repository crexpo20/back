import React, {Component, useState, state} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import Swal from 'sweetalert2';
import '../css/cardOfert.css';
import { NavLink, Navigate } from 'react-router-dom'
//import '../css/estilos.css';
//import '../css/registro.css';

export const RegistarCliente = () => {
	const [nombre, cambiarNombre] = useState({campo: '', valido: null});
    const [apellido, cambiarApellido] = useState({campo: '', valido: null});
	const [password, cambiarPassword] = useState({campo: '', valido: null});
	const [correo, cambiarCorreo] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
	const URL_CLIENTE = "http://31.220.21.237:8000/api/postCliente";	

	const expresiones = {
		nombre: /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ\s]{2,18})$/, // Letras y espacios, pueden llevar acentos.
        	apellido: /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ\s]{4,18})$/, // Letras y espacios, pueden llevar acentos.
		password: /^.[a-zA-Z0-9]{4,7}$/, // 5 a 8 digitos, numericos y alfabeticos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	}

	const onSubmit = async(e) => {
		e.preventDefault();

		if(
			apellido.valido === 'true' &&
			nombre.valido === 'true' &&
			password.valido === 'true' &&
			correo.valido === 'true'
		){

			const newCliente = {
				nombre: nombre.campo,
				apellido: apellido.campo,
				correo: correo.campo,
				password: password.campo,
			}

			const postCliente = async (url, newCliente) => {
				const response = await fetch(url, {

					method: 'POST',
					body: JSON.stringify(newCliente),
					headers: {
					  'Access-Control-Allow-Origin': '*',
					  'Content-Type': 'application/json',
					}
					//withCredentials: true,
					//credentials: 'same-origin',
			  
					//method: 'POST',
					
					/*headers: {
						
						
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'POST, GET',
						'Access-Control-Allow-Headers': 'Content-Type, Authorization',
						'Content-Type': 'multipart/form-data, aplication/json'
						
					}*/
					
				});
				return response;
			}
			
			const respuestaJson = await postCliente(URL_CLIENTE, newCliente);

			console.log("Response:------> " + respuestaJson.status);

			if(respuestaJson.status === 409 ){
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'El cliente ya se encuentra registrado, intenta con otros datos ',
					//footer: '<a href="">Why do I have this issue?</a>'
				})
			}else{
				cambiarFormularioValido(true);
				cambiarApellido({campo: '', valido: ''});
				cambiarNombre({campo: '', valido: null});
				cambiarPassword({campo: '', valido: null});
				cambiarCorreo({campo: '', valido: null});


				Swal.fire({
					icon: 'success',
					title: '¡Genial!',
					text: '¡Datos guardados exitosamente!',
					//footer: '<a href="">Why do I have this issue?</a>'
				})
				// ... 
			}
		} else {
			cambiarFormularioValido(false);
		}
	}

	const handleReset = () => {
		cambiarApellido("");
		cambiarNombre("");
		cambiarPassword("");
		cambiarCorreo("");
		window.location.href = '/login';
	};

	return (
		<center>
			<br/>
			<Formulario action="" onSubmit={onSubmit} id="loginF">
				<ContenedorBotonCentrado><h1>Registro de cuenta</h1></ContenedorBotonCentrado>
				<Input
					estado={nombre}
					cambiarEstado={cambiarNombre}
					tipo="text"
					label="Nombre"
					placeholder="Luis"
					name="usuario"
					leyendaError="El nombre solo puede contener letras y espacios."
					expresionRegular={expresiones.nombre}
				/>
				<Input
					estado={apellido}
					cambiarEstado={cambiarApellido}
					tipo="text"
					label="Apellido"
					placeholder="Gutierrez"
					name="apellido"
					leyendaError="El apellido solo puede contener letras y espacios."
					expresionRegular={expresiones.apellido}
				/>
				<Input
					estado={password}
					cambiarEstado={cambiarPassword}
					tipo="password"
					label="Contraseña"
					name="password"
					leyendaError="La contraseña tiene que ser de 5 a 8 dígitos, y solo puede contener números y letras."
					expresionRegular={expresiones.password}
				/>
				<Input
					estado={correo}
					cambiarEstado={cambiarCorreo}
					tipo="email"
					label="Correo Electrónico"
					placeholder="soyalguien1@correo.com"
					name="correo"
					leyendaError="El correo solo puede contener letras, números, puntos, guiones y guion bajo."
					expresionRegular={expresiones.correo}
				/>

				{formularioValido === false && <MensajeError>
					<p>
						<FontAwesomeIcon icon={faExclamationTriangle}/>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</MensajeError>}

				<ContenedorBotonCentrado>
					<Boton type="submit">Enviar</Boton>
				</ContenedorBotonCentrado>

				<ContenedorBotonCentrado>
					<ContenedorTerminos>
						<Label>
							¿Ya tienes una cuenta? Puedes ingresar aqui.
							<a href="#">
								< NavLink to="/login" >                
									<a class="rere">Ingresar</a>
								</NavLink>
							</a> 
						</Label>
						
					</ContenedorTerminos>
				</ContenedorBotonCentrado>
			</Formulario>
		</center>
	);
}
 
//export default register;