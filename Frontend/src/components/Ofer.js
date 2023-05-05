import React, { Component } from "react";
import axios from "axios";
import Input from '../components/Input';
import { ContenedorBotonCentrado, Formulario } from "../elementos/Formularios";

class Ofer extends Component{
    constructor(props){
        super(props);
        this.state={
            productos:[]
        }
       this.componentDidMount();
        
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

    render(){
        return(
            
            <div class = "home">
                <div class="formulario__grupo" id="grupo__usuario">
                <label for="correo" class="formulario__label">Seleccione el producto</label>
                <div>
                    <select name = "select" style={{width:500}}>
                        {this.state.productos.map(elemeto=>(
                            
                            <option key = {elemeto.id} value={elemeto.codprod}>{elemeto.producto}</option>
                        ))}
                      </select>
                      </div>
                      </div>
                      </div>
        )
    }
}
export default Ofer;