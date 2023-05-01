import React from 'react'
import cliente from '../images/Vista.jpg'
import user from '../images/userImage.png'

export const HomeCliente = () => {
  
  const volver = () => {      
    window.location.href = '/home';
  };

  return (
    <div className= "home" >
                <center>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                <img src={cliente} className="card-img-top" alt="..." style={{height: 500}}/>
                <div className="card-body">
                    <h5 className="card-title">BIENVENIDDO A MICROMARKET TITA</h5> 
                </div>
                <div style={{position: "absolute", top: 0, right: 0}}>
                <img src={user} type="button" alt="User" style={{height: 50}} onClick={volver}/>
                </div>
                </center>
    </div>
  )
}