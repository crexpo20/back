import { colors } from '@mui/material';
import React from 'react';

function Stock({ onClose ,producto }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
         <h4  >{producto}</h4>
        <button type="submit">Enviar</button>
        <button onClick={onClose}>Cerrar</button>
      </form>
    </div>
  );
}

export default Stock;