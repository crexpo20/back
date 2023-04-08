
import React, { useState , useEffect} from 'react';
import '../css/OfertaNueva.css';

//import logo from '../imagenes/registroicono.png';


//import { Nav } from "react";



export const RegistrarProductoNuevo = () => {
 
  const [images, setImages] = useState([]);
  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [codigo, setCodigo] = useState('');
  const [descripcion, setDescripcion] = useState("");
  const [marca, setMarca] = useState("");


  const handleChange = (e) => {
    setImages((images) => [...images, URL.createObjectURL(e.files[0])]);
    return URL.revokeObjectURL(e.files[0])
  }

  useEffect(() => {
    console.log(images);
  }, [images]);

  const deleteImage = (blob) => {
    setImages(images.filter(x => x !== blob));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
   
  
  
    handleReset();
  };
  const handleReset = () => {
    setNombre("");
      setCategoria("");
      setPrecio("");
      setCodigo("");
      setMarca("");
      setDescripcion("");
    
    window.location.href = '/home';
  };
  
  return (
    <div id='fondo' className='responsive'>
      
        
          
        
          <form 
          className='container text-center'
           id="formulario" 
           onSubmit={handleSubmit}>
          <h1>Registro de Producto</h1>
          <br>
          </br>
            <div className='row align-items-start'>
            <div className='col'>
            <label htmlFor="producto" > Nombre de Producto*</label>
            <input 
            type='text' 
            pattern="[A-Za-z]+" 
            className="form-control "  
            id="nombre" minlength="2" 
            maxlength="25" 
            required  
            name="nombre" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} />
            <br />
            <label htmlFor="codigo" >Codigo de Producto*</label>
            <br></br>
            <input 
            type='text' 
            pattern="[0-9]+" 
            className=" form-control " 
            id="codigo" 
            step="1" 
            placeholder='codigo*' 
            min="1"
            max="999999" 
            required 
            value={codigo}  
            onChange={(e) => setCodigo(e.target.value)} />
            <br />
            <label htmlFor="categoria" >Categoria*</label>
            <input type='text' 
            pattern="[A-Za-z]" 
            list="productos" 
            className="form-control "  
            id="categoria" 
            required  
            name="categoria"  
            value={categoria} 
            onChange={(e) => setCategoria(e.target.value)} />
            <datalist id="productos">
              <option value="Abarrotes" />
              <option value="Bebidas" />
              <option value="Bebidas alcoholicas" />
              <option value="Cuidado personal" />
              <option value="Enlatados" />
              <option value="Farmacos" />
              <option value="Fiambres y embutidos" />
              <option value="Golosinas" />
              <option value="Limpieza del hogar" />
              <option value="Cuidado personal" />
              <option value="Lacteos" />
              <option value="Panaderia" />
              <option value="Snacks" />
              <option value="Varios" />
            </datalist>
            <br></br> 
            <br></br> 
            <label htmlFor="descripcion"
             className='container text-center'>Descripción*</label>
            <input type="text"
            className="form-control "  
            id="descripcion" 
            placeholder='descripcion*'
            minlength="10" 
            maxlength="100"
            required 
            value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
            </div>
  
            <div className='col'>

            <label htmlFor="precio">Precio de venta (bs)*</label>
            <input type='number' 
            className="form-control "
             id="precio" 
             step="0.10" 
             placeholder='precio*'
              min="0.1" max="999999"
               required value={precio} onChange={(e) => setPrecio(e.target.value)} />
            <br></br> 
            <label htmlFor="fin">Marca*</label>
            <input type='text' 
            className="form-control "  
            id="Marca" minlength="2" 
            maxlength="25" required  
            name="marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
            <br></br> 
            Imagen*
            <br></br>
            <label htmlFor="inicio"></label>
            <input
             accept="image/png,image/jpg" 
             type="file"
             onChange={(e) => handleChange(e.target)}
             ></input>
            {images.map((row,index) =>
            <div key={index}>
              <br></br>
              <img id="imgProd" src = {row} alt={row} >
              </img> 
              <div>
              <br></br>
              <button id = "deleteImg" 
               onClick={() => deleteImage(row)}> Eliminar</button>
              </div>
            </div>
            )}
            </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button type="submit"  
            className="btn mx-5" 
            id='guardar'>Guardar</button>
            <button type="button" 
            onClick={handleReset} 
            id='borrar' 
            className="btn mx-5">Cancelar</button>
           
          </form>
        </div>
      
    )
  }
  //export const RegistrarOfertaNueva();
