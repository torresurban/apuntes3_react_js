import React from 'react'
import './Opcion.css'

const Opcion = (props) => {
  return (
    <div className='opcion div-fill fill-bottom' onClick={props.elegir}>
        {props.valor.eleccion}
    </div>
  )
}

export default Opcion