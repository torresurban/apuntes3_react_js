import React from 'react'

//funcion expresada; ademas ya contiene el return implicito--> const ejemplo = (props) => {props.msj}
const ComponenteFuncional = (props) => {
  return (
    <div>
        <h2>{props.msj}</h2>
    </div>
  )
}

export default ComponenteFuncional