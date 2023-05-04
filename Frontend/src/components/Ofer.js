import React, { Component } from "react";
import axios from "axios";
import { ContenedorBotonCentrado } from "../elementos/Formularios";

class Ofer extends Component{
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
    render(){
        return(
            <div className="home">
                <ContenedorBotonCentrado>
                <div className="form-group">
                      <select name = "productos" className="form-control" style={{width:500}}>
                        {this.state.productos.map(elemeto=>{
                            <option key = {elemeto.id} value={elemeto.id}>{elemeto.producto}</option>
                        })}
                      </select>
                </div>
                </ContenedorBotonCentrado>
            </div>
        )
    }
}
export default Ofer;