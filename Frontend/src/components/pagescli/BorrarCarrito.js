import React,{Component} from "react";
import axios from 'axios';


class BorrarCarrito extends Component{
 constructor(props){
 super(props);
  this.borrar = this.borrar.bind(this);
  this.borrar();
 }
componentDidMount(){
this.borrar();

}
borrar= async() => {
    await axios.delete('http://31.220.21.237:8000/api/detalle_venta.destroy/'+ this.props.id);
    
}
render(){

    const{id} =  this.props;
    return(
        <></>
    );
}

}

export default BorrarCarrito;