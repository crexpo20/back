import React, { Component } from "react";
import { Modal, ModalBody, ModalFooter } from "react-bootstrap";
import "../css/Carrito.css";
import axios from "axios";
import { Boton } from "../elementos/Formularios";
import { BsFillTrash3Fill } from "react-icons/bs";
import BorrarCarrito from "./pagescli/BorrarCarrito";
import { BsFillCartXFill } from "react-icons/bs";
import { AiOutlineLine } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import Swal from 'sweetalert2';
class Carrito extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      subtotal: 0,
      imagen: '',
      name:'',
      descuentos: 0,
      total:0,
      id:0,
      vacio:true,
      despacho:0,
      selecionado:'',
      
    }
    this.getProductos = this.getProductos.bind(this);
    this.aumentarsubtotal= this.aumentarsubtotal.bind(this);
    this.eliminar= this.eliminar.bind(this);
    this.aumentarDespacho= this.aumentarDespacho.bind(this);
    this.actualizar= this.actualizar.bind(this);
    this.cambiarStock = this.cambiarStock.bind(this);
    this.selecionar = this.selecionar.bind(this);
    this.eliminarTodo = this.eliminarTodo.bind(this);
  }
  componentDidMount() {
    this.getProductos();
   
  }

  getProductos = async () => {
   await axios.get('http://31.220.21.237:8000/api/getDetalle_venta ')
      .then(res => {
         const productos = res.data;
        // Ordenar por nombre en orden alfabético ascendente
        productos.sort((a, b) => a.nombre.localeCompare(b.nombre));

        this.setState({ productos });
        console.log(res.data)
        
        this.setState({ vacio: res.data.length === 0});
        
      }).catch((error) => {
        console.log(error);
      });
      this.aumentarsubtotal();
      this.aumentarDespacho();
  }
  actualizar = async (cod) => {
    await axios.get('http://31.220.21.237:8000/api/getProductos')
      .then(res => {
        const lista=res.data;
        console.log(res.data)
        lista.forEach( async(prod) => {
          if (prod.codprod ===cod){
            await axios
            .put('http://31.220.21.237:8000/api/putProductos/'+cod, {
             'producto':prod.producto,
             'marca':prod.marca,
              'desc':prod.desc,
             'precio':prod.precio,
          'image':prod.image,
          'codcat':prod.codcat,
          'stock': prod.stock ,
          'estado':0,
          
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
      this.aumentarsubtotal();
      this.aumentarDespacho();
  }
 eliminar=async(producto)=>{
  this.actualizar(producto.codprod);
  await axios.delete('http://31.220.21.237:8000/api/delDetalle_venta/'+  producto.codetalle);
  this.getProductos();
    
 }
 eliminarTodo = () => {
    this.state.productos.forEach((producto) => {
      this.eliminar(producto);
    });
  }
 aumentarDespacho= () =>{
  this.setState({despacho:0});
  const { productos } = this.state;
  let despacho = 0;
  
  productos.forEach((producto) => {
    despacho += parseInt(producto.cantidadprod) ;
  });

  this.setState({ despacho });
}
  aumentarsubtotal= () =>{
    this.setState({subtotal:0});
    const { productos } = this.state;
    let subtotal = 0;
    
    productos.forEach((producto) => {
      subtotal += parseInt(producto.costodetalle) * parseInt(producto.cantidadprod);
    });
  
    this.setState({ subtotal });
  }
  

   getImg(codprod) {
    try {
      const response = axios.get(`http://31.220.21.237:8000/api/obtenerProductos/${codprod}`);
      const img = response.data.image;
      console.log(img);
      return img;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  selecionar(prod) {
    this.setState({ selecionado: prod });
  }

  getProd = async(codprod) =>{
    try {
      const response = await axios.get(`http://31.220.21.237:8000/api/obtenerProductos/${codprod}`);      
      return response.data;
      
    } catch (error) {
      console.log(error);
      return null;
    }
  }
  cambiarStock = async (prod, cant) => {

    await axios
      .put('http://31.220.21.237:8000/api/putDetalle_venta/' + prod.codetalle, {

        'codprod': prod.codprod,
        'cantidadprod': cant,
        'costodetalle': prod.costodetalle,
        'nombre': prod.nombre,
        'imagen': prod.imagen,
        'stockdisp': prod.stockdisp,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    this.aumentarsubtotal();
    this.aumentarDespacho();
    this.getProductos();
  }
  render() {
    const { onClose } = this.props;
    const { vacio } = this.state;
   
    return (
      <div className="carrito-overlay">
        <div className="carrito-container">
          <Modal.Header closeButton onClick={onClose} className="modal-header">
            <h4 className="modal-title" id="tituloCa">Carrito</h4>
          </Modal.Header>
          <ModalBody className="modal-body">
          {vacio ? (
            <div className="row" id="vacio">
              <div className="icono">
              <BsFillCartXFill/>
              </div>
              <div className="textoIcono">
              <h2>Tu carrito se encuentra vacio</h2>
              </div>
            
            </div>
           
          ) : (
            <div className="lista">
              {this.state.productos
                ?.sort((o1, o2) => {
                  if (o1.producto < o2.producto) {
                    return -1;
                  } else {
                    if (o1.producto > o2.producto) {
                      return 1;
                    } else {
                      return 0;
                    }
                  }
                })
                .map((product, index) => {

                  const nombreCorto = product.nombre.substring(0,10);
                    let cantidad = product.cantidadprod;
                    const aumentar = () => {
                      if (cantidad + 1 <= product.stockdisp) {
                        cantidad = cantidad + 1;
                        { this.cambiarStock(product, cantidad) }
                      } else {

                        Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'Ya no hay mas stock que puedas agregar al carrito',
                          //footer: '<a href="">Why do I have this issue?</a>'
                        })

                      }

                    }
                    const disminuir = () => {
                      if (cantidad - 1 > 0) {
                        cantidad = cantidad - 1;
                        { this.cambiarStock(product, cantidad) }
                      }
                    }
                  return (
                    <div className="contenido" id="card">
                      <div className="imagen">
                        <img src={product.imagen} />
                      </div>
                      <div className="precio">
                        <h2>{nombreCorto}</h2>
                        <p>Bs. {parseFloat(product.costodetalle) * parseFloat(product.cantidadprod)}</p>
                        <p>cantidad:</p>
 
                        <div className="canti">
                             
                            <a id="menos" onClick={disminuir}><AiOutlineLine /></a>
                            <input
                              type="number"
                              className="form-control"
                              id="cantidad"
                              name="cantidad"
                              min="1"
                              max={product.stockdisp}
                              required
                              value={product.cantidadprod}
                              eadOnly
                            />
                            <a onClick={aumentar} id="mas"><AiOutlinePlus /></a>
                          </div>
                      </div>
                      <div className="basura">
                        <a onClick={() => this.eliminar(product)}>
                          <BsFillTrash3Fill />
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
          </ModalBody>
           
          <ModalFooter className="modal-footer" id="modalF">
          {vacio?(
           <p>.</p>
          ):(
            <div className="costo" id="modalF">
            <div className="primero" id="modalF">
            <div className="subtotal" id="modalF"> Subtotal:</div>
            <div className="preciosub" id="modalF">{this.state.subtotal} Bs.</div>
            </div>
            <div className="segundo" id="modalF">
             <div className="descuento" id="modalF"> Despacho:</div>
             <div className="despacho" id="modalF">{this.state.despacho} producto(s)</div>
            </div>
            <div className="segundo" id="modalF">
             <div className="descuento" id="modalF"> Descuento:</div>
             <div className="preciodescuento" id="modalF">-{this.state.descuentos} Bs.</div>
            </div>
            <div className="segundo" id="modalF">
              <div className="total" id="modalF">Total:</div>
              <div className="preciototal" id="modalF">{this.state.subtotal-this.state.descuentos} Bs.</div>
             
              
            </div >
            <Boton className="container" id="comprar" onClick={this.eliminarTodo}>Comprar</Boton>
              
            </div>
          )}
           
          </ModalFooter>
        </div>
      </div>
    );
  }
}

export default Carrito;