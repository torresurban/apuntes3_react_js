import React from 'react'
import './Digimon.css'

const Digimon = ({datos}) => {
    
  return (
    <div className='App'>
        {datos.map((dato, index) =>(
            <div className='digiCard' key={index}>
                <h3 className='nombre'>{dato.name}</h3>
                <img className='img' src={dato.img} alt={dato.name}/>
                <h4 className='nivel'>{dato.level}</h4>
            </div>
        ) )}
    </div>
  )
}

export default Digimon