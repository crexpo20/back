import React, { Component } from "react";
import { Boton} from '../elementos/MiniForm';
import '../css/VistaDetallada.css';
import axios from 'axios';
import '../css/Stock.css';
import {AiOutlineLine } from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import Swal from 'sweetalert2';

import agregarCarrito from "./agregarCarrito";
import { bool } from "prop-types";
class VistaDetallada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.producto,
cantidad:0,

      id:this.props.producto.codprod,
      stock: null,
      url:"http://31.220.21.237:8000/api/postDetalle_venta ",
      carrito:[],
      enCarrito:false,
    };
    this.getProductos = this.getProductos.bind(this);
    this.agregarAlCarrito= this.agregarAlCarrito.bind(this);
    this.getCarrito=this.getCarrito.bind(this);
    this.verificar= this.verificar.bind(this);
    this.updateProducto=this.updateProducto.bind(this);
  }

  componentDidMount(){
    this.getProductos(); 
    this.getCarrito();
  }

 increment = () =>{
    if(this.state.cantidad < this.state.product.stock){
	this.setState({cantidad:this.state.cantidad+1});
	}else{
		Swal.fire({
          	icon: 'error',
	  	title: 'Oops...',
         	 text: 'Ya no hay mas stock que puedas agregar al carrito',
          	//footer: '<a href="">Why do I have this issue?</a>'
        	})

	}
    
  }

   decrement = () => {
    if (this.state.cantidad > 0) {
      this.setState({cantidad:this.state.cantidad-1});
    }
  }

  getProductos=async()=>{
    await axios.get('http://31.220.21.237:8000/api/getProductos ')
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
getCarrito=async()=>{
  await axios.get('http://31.220.21.237:8000/api/getDetalle_venta')
  .then(res=>{
      this.setState({carrito: res.data});
      console.log(res.data)
     
  }).catch((error)=>{
      console.log(error);
  });
}
verificar = (cod) =>{
  this.setState({enCarrito:true});
  const { carrito } = this.state;
  let enCarrito = false;
  carrito.forEach((prod) => {
    if(cod === prod.codprod){
      enCarrito = true;
    }
  });
  this.setState({ enCarrito });
}
updateProducto = async (producto,cod, cantidad, costo,imagen,nombre,total) => {
  if(this.state.cantidad >= 1){
      if(producto.estado === 0){
    await axios
    .put('http://31.220.21.237:8000/api/putProductos/'+producto.codprod, {
      'producto':producto.producto,
      'marca':producto.marca,
      'desc':producto.desc,
      'precio':producto.precio,
      'image':producto.image,
      'codcat':producto.codcat,
      'stock': producto.stock ,
      'estado':1,
      
    })
    .then((res) => {
      Swal.fire({
          	icon: 'success',
	  	title: 'Hecho',
         	 text: 'Producto(s) agregados correctamente',
          	//footer: '<a href="">Why do I have this issue?</a>'
        	})

      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
    this.agregarAlCarrito(cod, cantidad, costo,imagen,nombre,total);
  }else{
    await axios.get('http://31.220.21.237:8000/api/getDetalle_venta')
      .then(res => {
        const lista=res.data;
        console.log(res.data)
        lista?.forEach( async(prod) => {
          if (prod.codprod ===producto.codprod){
            await axios
            .put('http://31.220.21.237:8000/api/putDetalle_venta/'+prod.codetalle, {
            'codprod':prod.codprod,
            'cantidadprod':prod.cantidadprod + 1,
            'costodetalle':prod.costodetalle,
            'nombre':prod.nombre,
            'imagen':prod.imagen,
            'stockdisp':prod.stockdisp,
           
          
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
          }
        });
       
        
      }).catch((error) => {
        console.log(error);
      });
     
    this.props.isClose();
  }
   
Swal.fire({
          	icon: 'success',
	  	title: 'Hecho',
         	 text: 'Producto(s) agregados correctamente',
          	//footer: '<a href="">Why do I have this issue?</a>'
        	});


  }else{
    Swal.fire({
          	icon: 'error',
	  	title: 'Oops...',
         	 text: 'No puedes agregar 0 productos al carrito',
          	//footer: '<a href="">Why do I have this issue?</a>'
        	})

  }
};
agregarAlCarrito = async (cod, cantidad, costo,imagen,nombre,total) => {
  this.getCarrito();
  
  if(this.state.enCarrito){
    this.props.isClose();
  }else{
    
    const newVenta = {
      codprod: cod.toString(),
      cantidadprod: cantidad,
      costodetalle: parseFloat(costo),
      
      nombre:nombre,
      imagen:imagen ,
      stockdisp:total
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
	<head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap" rel="stylesheet"/>
        </head>
      <div className="vista-content">
      <span className="close" onClick={isClose}>&times;</span>
        <div>
          <img src={product.image} alt="Producto" />
        </div> 

        <div>
          <h4 id="titulillo">{product.producto}</h4>

          <h3 id="boli">Bs. {product.precio}</h3>

	  <h3 id="canti">Cantidad: {product.stock} Unidad(es)</h3>

          <p id="desc">{product.desc}</p>  
          
          <div className="d-flex  align-items-center">
          <label htmlFor="cantidad"className="agregar" id = "canti">Agregar Cantidad: </label>
                     <a id = "espacio"></a>
                    <a id="menos" onClick={this.decrement}><AiOutlineLine/></a>
          
          <input
            type="number"
            className="form-control"
            id="cantidad"
            name="cantidad"
            min="1"
            max="999"
            required
            value={this.state.cantidad}
            onChange={this.handleCantidadChange}
          />
         
          <a  id="mas" onClick={this.increment}><AiOutlinePlus/></a>
          </div>
             
          <br></br>
          <center>
           {product.stock > 0 && (
         <Boton
         type="button"
         id="agregar"
         className="btn"
	 class="slide"
         onClick={() => this.updateProducto(product,product.codprod, this.state.cantidad , product.precio,product.image,product.producto,product.stock)}
         >
         Agregar al carrito
       </Boton>
       )}
      </center>
        </div>
      </div>
    </div>
    );
  }
}


export default VistaDetallada;