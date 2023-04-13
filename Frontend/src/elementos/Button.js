import React from "react";
import iconoModificar from '../images/iconoModificar.png';
function Button({ onClick }) {
  return (
    <a onClick={onClick}>
    <img id='icono' src={iconoModificar} alt="click aqui para modificar" />
    </a>
    
  );
}

export default Button;
