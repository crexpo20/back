import React, { Component } from "react";
import { Boton} from '../elementos/MiniForm';
import '../css/VistaDetallada.css';
import axios from 'axios';
import '../css/Stock.css';
import Swal from 'sweetalert2';

import agregarCarrito from "./agregarCarrito";
import {AiOutlineLine } from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";

class VistaDetalladaOferta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.producto,
      cantidad:0,
      id:this.props.producto.codprod,
      stock: null,
      url:"http://31.220.21.237:8000/api/postDetalle_venta ",
    };
    this.getProductos = this.getProductos.bind(this);
    this.agregarAlCarrito= this.agregarAlCarrito.bind(this);

  }

  componentDidMount(){
    this.getProductos(); 

  }

  increment = () =>{
    
    this.setState({cantidad:this.state.cantidad+1});
  }

   decrement = () => {
    if (this.state.cantidad > 0) {
      this.setState({cantidad:this.state.cantidad-1});
    }
  }


  getProductos=async()=>{
    await axios.get('http://31.220.21.237:8000/api/getOferta')
    .then(res=>{
        this.setState({productos: res.data});
        console.log(res.data)
        const { product } = this.state;
        const productWithStock = res.data.find(p => p.codprod === product.codprod);
        if (productWithStock) {
          this.setState({ stock: productWithStock.stock });
        }
    }).catch((error)=>{
        console.log(error);
    });
}


agregarAlCarrito = async (cod, cantidad, costo) => {
   if(this.state.cantidad >= 1){
    const newVenta = {
    codprod: cod.toString(),
    cantidadprod: cantidad,
    costodetalle: parseFloat(costo),
  };

  console.log(newVenta);

  try {
    const response = await axios.post(this.state.url, newVenta, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      const data = response.data;
      console.log(data);
    } else {
      throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
  }
  this.props.isClose();

   }else{ 
    
    Swal.fire({
          	icon: 'error',
	  	title: 'Oops...',
         	 text: 'No puedes agregar 0 productos al carrito',
          	//footer: '<a href="">Why do I have this issue?</a>'
        	})

    
   }
  };

  render() {
    const { isClose } = this.props;
    const { product, stock  } = this.state;
    const{cant}= 0;
    const selectOptions = [];
   
    if (stock) {
      for (let i = 1; i <= stock; i++) {
        selectOptions.push(<option value={i} key={i}>Cantidad: {i} Unidad(es) </option>);

      }
    }

    return (
      <div className="vista">
      <div className="vista-content">
      <span className="close" onClick={isClose}>&times;</span>
        <div>
          <img src={product.image} alt="Producto" />
        </div> 

        <div>
            <h4 id = "titulillo"style={{textAlign: "center"}}>{product.nombre}</h4>
            <h5 id = "desc">{product.desc}</h5>  
            <h2 id ="boli">Antes bs.{product.precioanterior}</h2>
            <h2 id ="boli"> Ahora bs.{product.precioventa}</h2>

            <h2 id = "canti">Ahorra: {product.precioanterior - product.precioventa} bs</h2>
            <h2 id = "canti">Valida desde el {product.fechaini} </h2>
             <h2 id = "canti">Hasta el {product.fechafin}</h2>
                   <center> 
          <h5 id = "desc">...Por el momento las ofertas estan dispobles unicamente el la tienda fisica...</h5> 
          </center>
        </div>
      </div>
    </div>
    );
  }
}


export default VistaDetalladaOferta;