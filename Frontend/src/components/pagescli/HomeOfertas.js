import React , {Component, useState}from "react";
import axios from "axios";
import '../../css/estilos.css'
import { Boton } from "../../elementos/Formularios";
import VistaDetallada from "../VistaDetallada";
import { NavLink } from 'react-router-dom';
class HomeOferta extends  Component{
    
    constructor(props){
        super(props);
        this.state={
            productos:[],
            showModal:false,
            productoSelec:"",
            cantidad:0,
            codigoP:-1,
            hoveredCard: false,

        }
       
        
    }
    

    
       
    handleReset = () => {
        window.location.href = '/home';
    }
    
    openModal = (producto) => {
        this.setState({ showModal: true, productoSelec: producto });
      }
    
    closeModal = () => {
        this.setState({ showModal: false });
      }

    handleCardMouseEnter = () => {
        this.setState({ hoveredCard: true });
    };
      
    handleCardMouseLeave = () => {
        this.setState({ hoveredCard: false });
    };
    
     redireccionarAbarrotes() {
        window.location.href = "/";
      }

     redireccionarAFarmacos() {
        // L gica adicional si es necesario antes de redireccionar
console.log("escucho")
      }
    render(){
        

        return(
            <center>
                <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Dancing+Script&display=swap" rel="stylesheet"/>
                </head>
            <div>  
                <body id = "bodyCardH">
                
                    <br></br>
                
                    <div className="producto" id="tarjetasAH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Abarrotes</h2>
                                    <img src= "https://res.cloudinary.com/dymazwyut/image/upload/v1684834790/IS/ul9s1qnmrqmzkwllukzl.png" alt="" />
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Abarrotes" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasBH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Bebidas</h2>
                                    <img src ="https://res.cloudinary.com/dymazwyut/image/upload/v1684835186/IS/yaqjlwg4xcx0hvoepmhj.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Bebidas" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasBAH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo1">Bebidas Alcoholicas</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684835313/IS/efcqg57jp7fq62mth43h.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/BebidasA" id = "link_cat"><span id="categori">Ir</span></NavLink>  
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasCPH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Cuidado Personal</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684835412/IS/siafxpeuu2cifqfspkke.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/CuidadoP" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasEH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Enlatados</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684835534/IS/jrjhmawssustgwrsia0u.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Enlatados" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasFH" onClick={this.redireccionarAFarmacos}>
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Farmacos</h2>
                                    <img src= "https://res.cloudinary.com/dymazwyut/image/upload/v1684835617/IS/etwu01fehzhl1b1k4sxf.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Farmacos" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasFiH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Fiambres </h2>
                                    <img src= "https://res.cloudinary.com/dymazwyut/image/upload/v1684835743/IS/l6onbsnvv41vg8ojuhkm.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/FiamyEmb" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasGH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Golosinas</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684835969/IS/oyescnd2pqwhjmvqguly.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Golosinas" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasLH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Lacteos</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836111/IS/oirkbjtycsi1kqpefkgf.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Lacteos" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasLiH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo1">Limpieza del Hogar</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836170/IS/eyefybtiuvhek9zjitil.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/LimpiezaH" id = "link_cat"><span id="categori">Ir</span></NavLink>         
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasPH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Panaderia</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836228/IS/bmggny2mnctvvudw4ooc.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Panaderia" id = "link_cat" ><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasSH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Snacks</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836307/IS/xyp8cyarspjdp3z285xe.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Snacks" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>

                    <div className="producto" id="tarjetasVH">
                        <center>
                            <div>
                                <center>
                                    <h2 id="tituliyo">Varios</h2>
                                    <img src = "https://res.cloudinary.com/dymazwyut/image/upload/v1684836384/IS/deyrtcrfbbsi8nkiz5dm.png" alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <NavLink to="/Varios" id = "link_cat"><span id="categori">Ir</span></NavLink>
                                </center>
                            </div>
                        </center>
                    </div>
                </body>
            </div>
            </center>
        )
    }
}
export default HomeOferta;