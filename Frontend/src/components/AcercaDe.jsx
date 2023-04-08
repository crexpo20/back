import React from 'react'
import acerca from '../images/foto_acercade.jpg'

export const AcercaDe = () => {
  return (
    <div className="container my-5">
    <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
      <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 className="display-4 fw-bold lh-1">Desarrollador</h1>
        <p className="lead"><strong>Alumno: </strong>Juan Pérez</p>
        <p className="lead"><strong>Carrera: </strong>Analista Programador / Ingeniería en Informática</p>
        <p className="lead"><strong>Asignatura: </strong>Programación Front End</p>
      </div>
      <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img className="rounded-lg-3" src={acerca} alt=""/>
      </div>
    </div>
  </div>
  )
}
