import React, {Component, useState} from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';


class agregarCarrito extends Component{
	constructor(props){
	super(props);
	this.state={
      producto:'',
	  costo:0,
	  url:"http://31.220.21.237:8000/api/postDetalle_venta ",
	}
	this.agregar= this.agregar.bind(this);
	
	}
   componentDidMount(){
   this.agregar();
   
   }
   agregar = async () => {
	const newVenta = {
	  codprod: this.props.codprod,
	  cantidadprod: this.props.cant,
	  costodetalle: this.state.costo,
	};
  
	console.log(newVenta); // Verifica si las propiedades se pasan correctamente
  
	try {
	  const response = await fetch(this.state.url, {
		method: 'POST',
		body: JSON.stringify(newVenta),
		headers: {
		  'Content-Type': 'application/json',
		},
	  });
  
	  if (response.ok) {
		const data = await response.json();
		console.log(data); // Puedes realizar alguna acción con los datos de la respuesta de la API aquí
	  } else {
		throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
	  }
	} catch (error) {
	  console.error(error);
	}
  };

   render(){
   
	   const{codprod,cant} =  this.props;
	   return(
		   <></>
	   );
   }
   
   }
   
   export default agregarCarrito;