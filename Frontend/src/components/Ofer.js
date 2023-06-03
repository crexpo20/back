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
        await axios.get('http://31.220.21.237:8000/api/getProductos')
        .then(res=>{
            this.setState({productos: res.data});
            console.log(res.data.producto)
        }).catch((error)=>{
            console.log(error);
        });
    }

    render(){
        return(
            
            <div>
                <div class="formulario__grupo" id="grupo__usuario">
                <label for="correo" class="formulario__label"><b>Seleccione el producto*:  
                    </b></label>
                    <br></br>
                    
                <div>
                    <select name = "select" id = "select_prod">
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
                        .map(elemeto=>(
                            
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