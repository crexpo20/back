import React , {Component}from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../css/estilos.css';
import Input from '../components/Input';
import { ContenedorBotonCentrado, Boton } from "../elementos/Formularios";
import Swal from 'sweetalert2';

class Delete extends Component{
    constructor(props){
        super(props);
        this.state={
            productos:[]
        }

        
        this.getProductos = this.getProductos.bind(this);
    }
    componentDidMount(){
        this.getProductos();
    }

    getProductos=async()=>{
        await axios.get('http://127.0.0.1:8000/api/getProductos')
        .then(res=>{
            this.setState({productos: res.data.producto});
            console.log(res.data.producto)
        }).catch((error)=>{
            console.log(error);
        });
    }

    deleteProducto = async(codprod) => {
        await axios.delete('http://127.0.0.1:8000/api/delProductos/ '+ codprod);
        this.getProductos();
    }

    onSubmit = async(e) => {
        var miCheck = document.querySelectorAll('.form-check-input');
        if(miCheck.checked == 'true'){
            Swal.fire({
                title: '¿Estas seguro de eliminar esto?',
                text: 'No podras recuperarlo más adelante',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Si!'
              }).then((result) => {
                if (result.isConfirmed) {
                    this.deleteProducto();
                  Swal.fire(
                    '¡Eliminado!',
                    'El o los producto(s) seleccionado fueron eliminados correctamente.',
                    'success'
                  )
                    
                }
              })
        }
    }

    handlereset = () => {
        var miC = document.getElementById('flexCheckDefault')
        if(miC.checked){
            //checked==false;
        }
    }

    render(){
        return(
            <div class="home">
                <ContenedorBotonCentrado><h1>Eliminar Producto</h1></ContenedorBotonCentrado>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                        <th scope='col'>ID</th>
                        <th scope='col'>Producto</th>
                        
                        <th scope='col'>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.productos.map(product=>
                                <tr key={product.id}>
                                    <th>{product.codprod}</th>
                                    <th>{product.producto}</th>
                                        
                                        <th>
                                           <ContenedorBotonCentrado>
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label"  for="flexCheckDefault"> 
                                                    </label>
                                                </div>
                                            </ContenedorBotonCentrado>
                                        </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <center>
					<Boton id= "guardarP" type="submit" onClick={this.onSubmit()}> Eliminar </Boton>
				</center>
				<center>
					<Boton id= "borrarP"  type="button" className="btn mx-5"> Cancelar </Boton>
				</center>
            </div>
           
        
        )
    }
}
export default Delete;