
import React, { useState } from 'react';
import '../css/OfertaNueva.css';
//import logo from '../imagenes/registroicono.png';


//import { Nav } from "react";



export const ModificarDatosDelNegocio = () => {

    

  const [negocio, setNegocio] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState('');
  const [propietario, setPropietario] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [telefono, setTelefono] = useState("");
  

  


  const handleSubmit = (event) => {
    event.preventDefault();
   
    
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleReset();
    };
    const handleReset = () => {
  
      setNegocio("");
      setCorreo("");
      setDireccion("");
      setPropietario("");
      setDescripcion("");
      setTelefono("");
      //setImagen("");
    };
    
    handleReset();
  };
  const handleReset = () => {

    setNegocio("");
    setCorreo("");
    setDireccion("");
    setPropietario("");
    setTelefono("");
    setDescripcion("");
    //setImagen("");
    
    window.location.href = '/home';
  };
  
  return (
    <div id='fondo' className='responsive'>
      
      <script src='./config/script.js'></script>
          
        
          <form className='container text-center' id="formulario" onSubmit={handleSubmit}>
          <h1>Modificar datos de negocio</h1>
          <br>
          </br>
            <div className='row align-items-start'>
            <div className='col'>
            <label htmlFor="negocio" > Nombre del negocio*</label>
            <input type='text' className="form-control "  id="negocio" minlength="2" maxlength="25" required  name="negocio" value={negocio} onChange={(e) => setNegocio(e.target.value)} />
            <br />

            <label htmlFor="direccion" > Direccion*</label>
            <input type='text' className="form-control "  id="direccion" minlength="5" maxlength="30" required  name="direccion" value={direccion} onChange={(e) => setDireccion(e.target.value)}
              />
            <br />

            <label htmlFor="propietario" > Nombre del propietario*</label>
            <input type='text' className="form-control "  id="propietario" minlength="2" maxlength="25" required  name="propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)} />
            <br />
            
            </div>
  
            <div className='col'>

            <label htmlFor="correo" > Correo electronico*</label>
            <input type='text' className="form-control "  id="correo" minlength="2" maxlength="25" required  name="correo" value={correo} onChange={(e) => setCorreo(e.target.value)} />
            <br />

            <label htmlFor="telefono" > Numero*</label>
            <input type='text' className="form-control "  id="telefono" min="66666666" maxlength="79999999" required  name="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
            <br></br>

            <label htmlFor="descripcion" className='container text-center'>Descripción*</label>
            <input type="text"className="form-control "  id="descripcion" placeholder='descripcion*'minlength="10" maxlength="100"required value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            
            <br></br> 
            
            </div>
            
            </div>
            <br />
            <br></br>
            Imagen (Logo)*
            <br></br>
            <label htmlFor="inicio"></label>
            <input accept="image/png,image/jpg" type="file"></input>
            <br></br> 
            <br />
            <br />
            <br />
            
            <button type="submit"  className="btn mx-5" id='guardar'>Guardar</button>
            <button type="button" onClick={handleReset} id='borrar' className="btn mx-5">Cancelar</button>
           
          </form>

        
          
        </div>
    )
  }
  //export const RegistrarOfertaNueva();
