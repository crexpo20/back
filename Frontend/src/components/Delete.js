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
        await axios.get('http://31.220.21.237:8000/api/getProductos')
        .then(res=>{
            this.setState({productos: res.data});
            console.log(res.data.producto)
        }).catch((error)=>{
            console.log(error);
        });
    }

    ordenarProductos = async() => {
        this.productos.sort((o1, o2) =>{
                if(o1.producto < o2.producto){
                    return -1;
                }else{
                    if(o1.producto > o2.producto){
                        return 1;
                    }else{
                        return 0;
                    }
                }
        })

        console.log(this.productos);
    }

    deleteP = async(codprod) => {
        await axios.delete('http://31.220.21.237:8000/api/delProductos/'+ codprod);
        this.getProductos();
    }

    deleteProducto = async(codprod) => {
        Swal.fire({
            title: '¿Estas seguro de eliminar esto?',
            text: 'No podras recuperarlo más adelante',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí!'
          }).then((result) => {
            if (result.isConfirmed) {
                 this.deleteP(codprod)
              Swal.fire(
                '¡Eliminado!',
                'El producto seleccionado fue eliminado correctamente.',
                'success'
              )
            }
         })



        
    }

    onSubmit = async(e) => {
        //var miCheck = document.getElementById('form-check').checked;
        //if(miCheck){
            /*Swal.fire({
                title: '¿Estas seguro de eliminar esto?',
                text: 'No podras recuperarlo más adelante',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí!'
              }).then((result) => {
                if (result.isConfirmed) {*/
                    this.deleteProducto(e);
                  Swal.fire(
                    '¡Eliminado!',
                    'El producto seleccionado fue eliminado correctamente.',
                    'success'
                  )
               // }
             // })
        }
   // }

    handleReset = () => {
        window.location.href = '/home';
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
                            this.state.productos?.sort((o1, o2) =>{
                                if(o1.producto < o2.producto){
                                    return -1;
                                }else{
                                    if(o1.producto > o2.producto){
                                        return 1;
                                    }else{
                                        return 0;
                                    }
                                }
                        })
                            .map(product =>
                                <tr key={product.id}>
                                    <th id="products">{product.codprod}</th>
                                    <th id="products">{product.producto}</th>
                                        
                                        <th>
                                        <Boton id= "nuevo" type="submit" onClick={()=>this.deleteProducto(product.codprod)}> Eliminar </Boton>
                                        </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <div id= "pos">
                <ContenedorBotonCentrado>
				    <Boton id= "cancel"  type="button" className="btn" onClick={this.handleReset}> Volver </Boton>
                </ContenedorBotonCentrado>
             </div>
            </div>
           
        
        )
    }
}
export default Delete;