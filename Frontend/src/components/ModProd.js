import React, { Component } from "react";
import { Boton, MensajeError } from '../elementos/MiniForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import '../css/Stock.css';
import '../css/modPro.css';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

class ModificarProducto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      producto: props.producto,
      nombre: props.producto.producto,
      id:this.props.producto.codprod,
      precio: props.producto.precio,
      marca: props.producto.marca,
      desc: props.producto.desc,
      image: props.producto.image,
      estado: 0,
      nombreValido: true,
      precioValido: true,
      marcaValido: true,
      descValido: true,
      
    };
    this.updateProducto = this.updateProducto.bind(this);
  }

  componentDidMount(){
  
    this.updateProducto();
   
  }

  updateProducto = async () => {
    await axios
      .put('http://31.220.21.237:8000/api/putProductos/'+this.props.producto.codprod, {
      'producto':this.state.nombre,
      'marca':this.state.marca,
      'desc':this.state.desc,
      'precio':this.state.precio,
      'image':this.props.producto.image,
      'codcat':this.props.producto.codcat,
      'stock': this.props.producto.stock,
      'estado': 0
      })
      .then((res) => {
        console.log(res.data.producto);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    if (this.state.nombreValido &&
        this.state.precioValido &&
        this.state.marcaValido &&
        this.state.descValido
      ) { 
        await this.updateProducto();
        this.props.isClose();
        Swal.fire({
          icon: 'success',
          title: ' ¡Genial!',
          text: ' ¡Producto modificado exitosamente!',
          //footer: '<a href="">Why do I have this issue?</a>'
        })
      }
  }

  handleNombreChange = (event) => {
    const valor = event.target.value;
    const nombreValidoExp = /^[a-zA-Z]{1,2}([a-zA-ZÀ-ÿ0-9\s]{1,28})$/;
    const esValido = nombreValidoExp.test(valor);
    this.setState({nombre: valor, nombreValido: esValido});
  };
  
  handlePrecioChange = (event) => {
    const valor = event.target.value;
    const precioValidoExp = /^(?!0(\.0{1,2})?$)(0|[1-9][0-9]{0,3})(\.[0-9]{1,2})?$/; 
    const esValido = precioValidoExp.test(valor);
    this.setState({precio: valor, precioValido: esValido});
  };
  
  handleMarcaChange = (event) => {
    const valor = event.target.value;
    const marcaValidoExp = /^[a-zA-Z]{1,2}([a-zA-Z0-9\s]{1,13})$/; 
    const esValido = marcaValidoExp.test(valor);
    this.setState({marca: valor, marcaValido: esValido});
  };

  handleDescChange = (event) => {
    const valor = event.target.value;
    const descValidoExp = /^[a-zA-Z]{1,2}([a-zA-Z0-9-|_|!|#|%|(|)|,|.\s]{9,98})$/; 
    const esValido = descValidoExp.test(valor);
    this.setState({desc: valor, descValido: esValido});
  };

  handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = (upload) => {
      this.setState({
        image: upload.target.result
      });
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  render() {
    const { isClose } = this.props;
    const { nombreValido, precioValido, marcaValido, descValido } = this.state;
    const formularioValido = nombreValido && precioValido && marcaValido && descValido;

    return (
    <div className="modpro">
        <div className="modal-content">
          <Modal.Header>
            <h4 className="modal-title">Modificar Producto</h4>
          </Modal.Header>
          <form action="" onSubmit={this.handleSubmit} className="formulario">

            <div className="form-group">
              <label htmlFor="nombre">Nombre*:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                name="nombre"
                value={this.state.nombre}
                onChange={this.handleNombreChange}
              />
              {nombreValido === false && <p className="mensaje-error">El nombre debe contener de 2 a 20 caracteres entre números, letras y espacios.</p>}
            </div>

            <div className="form-group">
              <label htmlFor="descrip">Descripcion*:</label>
              <input
                type="text"
                className="form-control"
                id="descrip"
                name="desc"
                value={this.state.desc}
                onChange={this.handleDescChange}
              />
              {descValido === false && <p className="mensaje-error">La descripción debe ser de 10 a 100 caracteres, y contener letras, números y caracteres especiales como ser: _ - ! % ().</p>}
            </div>

            <div className="form-group">
              <label htmlFor="precio">Precio*:</label>
              <input
                type="text"
                className="form-control"
                id="precio"
                name="precio"
                value={this.state.precio}
                onChange={this.handlePrecioChange}
              />
              {precioValido === false && <p className="mensaje-error">El precio solo puede contener números enteros o si se quiere ingresar un número decimal se puede poner un carácter especial (.) y dos decimales.</p>}
            </div>

            <div className="form-group">
              <label htmlFor="marca">Marca*:</label>
              <input
                type="text"
                className="form-control"
                id="marca"
                name="marca"
                value={this.state.marca}
                onChange={this.handleMarcaChange}
              />
              {marcaValido === false && <p className="mensaje-error">La marca solo debe tener caracteres numéricos y letras, y entre 2 a 15 caracteres.</p>}
            </div>

            <div className="form-group">
            <label htmlFor="image">Imagen*:</label>
              <center>
								<div class="card" id = "image" >
                  <img id="img-preview"  src={this.state.image} />
										<div class="card-footer" id = "image">
											<input accept="image/png,image/jpg" type="file" id="img-uploader" className='img-upload' onChange={this.handleImageChange}></input>
											<progress id="img-upload-bar" value="0" max="100" ></progress>
										</div>
								</div>
							</center>
						</div>
            <br></br>
            {formularioValido === false && (
            <MensajeError>
              <p>
                <FontAwesomeIcon icon={faExclamationTriangle} />
                <b>Error:</b> Por favor rellena el formulario correctamente.
              </p>
            </MensajeError>
          )}

            <center>
              <Boton id="guardarP" type="submit">Guardar</Boton>
              <Boton id="borrarP" type="button" onClick={isClose} className="btn mx-5">Cancelar</Boton>
            </center>
          </form>
        </div>
      </div>
    );
  }
}

export default ModificarProducto;