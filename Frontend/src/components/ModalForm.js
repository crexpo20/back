import React, { useState } from "react";


function ModalForm({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nombre:", name);
    console.log("Email:", email);
  };

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" value={name} onChange={(event) => setName(event.target.value)} />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

              <button type="submit">Enviar</button>
            </form>

            <button onClick={onClose}>Cerrar</button>
          </div>
          <button onClick={onClose}>Cerrar</button>
        </div>
      )}

      <style>
        {`
          .modal {
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
    </>
  );
}

export default ModalForm;
