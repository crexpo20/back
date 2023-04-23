import {React,  useState } from "react";
import iconoModificar from '../images/iconoModificar.png';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NoteAltIcon from '@mui/icons-material/NoteAlt';

function Button({ onClick }) {
  return (
    <a onClick={onClick}>
      <NoteAltIcon/>
   
    </a>
    
  );
}

function ButtonStock({ onClick}) {
  
  
  return (
    <a onClick={onClick}>
      <AddCircleOutlineIcon/>
     
    </a>
    
  );
}

export default Button;
