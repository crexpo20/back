import React from 'react';

const ModificarProducto = ({ onClose }) => {
  const handleSubmit = (event) => {
    // manejar envío de formulario
  };

  return (
    <div className="formulario-emergente">
      <form onSubmit={handleSubmit}>
        {/* campos de formulario */}
        <button type="submit">Enviar</button>
      </form>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default ModificarProducto;
