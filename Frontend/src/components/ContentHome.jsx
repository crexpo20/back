import React from 'react'
import card1 from '../images/card1.jpg'
import card2 from '../images/card2.jpg'
import micromarket from '../images/micromarket.jpg'

export const ContentHome = () => {
  return (
    <div className='home'>
                <center>
                <img src={micromarket} className="card-img-top" alt="..." style={{height: 500}}/>
                <div className="card-body">
                    <h5 className="card-title">Micromarket TITA</h5>
                    <p className="card-text" style={{textAlign:"justify"}}>En micromercado TITA podrás encontrar gran variedad de productos de la canasta familiar y al mejor precio!!</p>
                </div>
                </center>
            
    </div>
  )
}
