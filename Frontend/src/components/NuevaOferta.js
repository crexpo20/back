import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from '../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa4, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import Input from '../components/Input';
import '../css/ventanaImagen.css';
//import '../'
import '../css/OfertaNueva.css';
import '../css/estilos.css';
import Swal from 'sweetalert2';
import {default as Ofer} from './Ofer'
import axios from 'axios';

export const NuevaOferta = () => {
  
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
	const [producto, cambiarProducto] = useState({campo: '', valido: null});
	const [descripcion, cambiarDescripcion] = useState({campo: '', valido: null});
	const [precio, cambiarPrecio] = useState({campo: '', valido: null});
  const [precioA, cambiarPrecioA] = useState({campo: '', valido: null});
	const [inicio, cambiarInicio] = useState({campo: '', valido: null});
	const [fin, cambiarFin] = useState({campo: '', valido: null});
	const [formularioValido, cambiarFormularioValido] = useState(null);
  const valor = document.getElementById('select_prod');
   const URL_PRODUCTO = 'http://31.220.21.237:8000/api/postOferta'; 
const today = new Date();
  const formattedDate = today.toISOString().slice(0, 10);
  const hoy = new Date();
  // Agregar un año a la fecha actual
  const maxFecha = new Date(hoy.getFullYear() + 1, hoy.getMonth(), hoy.getDate()).toISOString().split('T')[0];
  const dataArray = [];
  const prods = '';
  const img = '';

	const expresiones = {
		descripcion: /^[a-zA-Z]{1,2}([a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{9,98})$/, // Letras, numeros, guion y guion_bajo.
		producto: /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ0-9\s]{1,28})$/, // Letras y espacios, pueden llevar acentos.
		//marca: /^[a-zA-Z0-9\s]{3,15}$/, //para numeros y letras
		//codigo: /^\d{1,10}$/, // 1 a 10 numeros.
		precio:/^(?!0(\.0{1,2})?$)(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?$/, // Numeros decimales, de uno a cuatro antes el punto y solo dos decimales despues.
	}

  function variable(a){
    const  getProduct=async(a)=>{
      await axios.get('http://31.220.21.237:8000/api/obtenerProducto/' + a)
      .then(res=>{
        prods = res.data.producto.producto;
        img = res.data.producto.image;
        
  
       
      }).catch((error)=>{
          console.log(error);
      });
  }
    return prods;

  }
  //recuperamos datos de un solo producto, por eso le pasamos parametro de entrada codprod// 
  // la API  obtenerProducto devuelve la informacion de un solo producto, llamandolo por su key//

  //getImg retorna la constante img 
  async function getImg(codprod) {
    try {
	const response = await axios.get(`http://31.220.21.237:8000/api/obtenerProductos/${codprod}`);
     
       const prods1 = response.data.producto;
      const img = response.data.producto.image;
      console.log(prods1);
      return img;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  function estado(){
    let fechaActual = new Date().toISOString().slice(0, 10);
    if(fechaActual == inicio){
      return 1;
    }else{
      return 0;
    }
  }

  //recuperamos datos de un solo producto, por eso le pasamos parametro de entrada codprod// 
  // la API  obtenerProducto devuelve la informacion de un solo producto, llamandolo por su key//

   //getProd recupera el nombre del producto

  async function getProd(codprod) {
    try {
      const response = await axios.get(`http://31.220.21.237:8000/api/obtenerProductos/${codprod}`);
      const prods1 = response.data.producto.producto;
      const img = response.data.producto.image;
      console.log(prods1);
      return prods1;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function getPre(codprod) {
   try {
	const response = await axios.get(`http://31.220.21.237:8000/api/obtenerProductos/${codprod}`);
     
       const prods1 = response.data.producto.precio;
      const img = response.data.producto.image;
      console.log(prods1);
      return prods1;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

   async function getStock(codprod) {
   try {
	const response = await axios.get(`http://31.220.21.237:8000/api/obtenerProductos/${codprod}`);
     
       const prods1 = response.data.producto.stock;
      const img = response.data.producto.image;
      console.log(prods1);
      return prods1;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  
  



    
    
	const onSubmit = async(e) => {
		e.preventDefault();
                const stock = await getStock(valor.value)
		if(
			descripcion.valido === 'true' &&
			inicio != null &&
			fin != null
		){ if(stock > 0){
			/*mismo del controller*/
      //aqui asignamos valores recuperandolos en getImg y GetProd///
      const img = await getImg(valor.value);
      const prod = await getProd(valor.value);
      
      const precioAnt = await getPre(valor.value);
	const newOferta ={
        //consul log
        codprod: valor.value,
        desc: descripcion.campo,
        fechaini: inicio,
        fechafin: fin,
        precioventa: precio.campo,
        precioanterior: precioAnt,
      
        estado: estado(inicio),
        nombre: prod,
        image: img,
			}

			console.log(newOferta);
		  const postProducto = async (url, newOferta) => {
				const response = await fetch(url, {        
						method: 'POST',
						body: JSON.stringify(newOferta),
						headers: {
						  'Content-Type': 'application/json',
						}
				});
        console.log(newOferta);
				return response;
			}
				
			const respuestaJson = await postProducto(URL_PRODUCTO, newOferta);
			console.log("Response:------> " + respuestaJson.status);
	
			if(respuestaJson.status === 429){
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Error al guardar la oferta, intenta nuevamente',
					//footer: '<a href="">Why do I have this issue?</a>'
				})
        console.log(inicio);
        console.log(fin);
			}else{
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
				})
			}
		

                     } else {
 			Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No hay poductos disponibles para crear esta oferta, verifica el stock',
					//footer: '<a href="">Why do I have this issue?</a>'
				})

                           
                     }
                
                 }else{
                    
			cambiarFormularioValido(false);
		}
	}
	
  function cambiarfecha(fecha){
    const year = fecha.substr(0,4)
    const month = fecha.substr(5,2)
    const day = fecha.substr(8,2)
    const date = year+month+day;
    return date;
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
		} else {
			cambiarFormularioValido(false);
		}
  };

  const handleReset = () => {
    if((precio||producto||inicio||fin||descripcion||precioA) != ""){
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
      window.alert('Accion cancelada');
    }   
  };
    
	return (
    <div class = "homeFormON">
      <br/>
			<br></br>
      <br></br>
			<ContenedorBotonCentrado><h1>Registro de Oferta Nueva</h1></ContenedorBotonCentrado>
      <br/>
		  <main>
			  <Formulario action="" onSubmit={onSubmit}>
				  <Ofer/>
         
          <Input
            estado={precio}
              cambiarEstado={cambiarPrecio}
              tipo="text"
              label="Precio de oferta:*"
              name="precio"
              placeholder="20.00"
              leyendaError="El precio solo puede contener números enteros o si se quiere ingresar un número decimal se puede poner un carácter especial (.) y dos decimales."
            expresionRegular={expresiones.precio}
				  />
          

          <div>
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
            <br/>
          </div>

				  <div className='col' id= "calendar">
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
            <br/>
          </div>
         <ContenedorBotonCentrado>
         <Input
            estado={descripcion}
            cambiarEstado={cambiarDescripcion}
            tipo="text"
            label="Descripcion*:"
            name="descripcion"
            placeholder="Describe tu oferta"
            leyendaError="La descripción debe ser de 10 a 100 caracteres, y contener letras, números y caracteres especiales como ser: _ - ! % ()"
            expresionRegular={expresiones.descripcion}
          />
         </ContenedorBotonCentrado>
            

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

