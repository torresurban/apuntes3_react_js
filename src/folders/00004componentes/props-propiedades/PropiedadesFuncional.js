import React from 'react'
import PropTypes from 'prop-types'

const PropiedadesFuncional = (props) => {
  return (
    <div>
        <h2>Propiedades en Componente Funcional</h2>
        <h3>{props.porDefecto}</h3>
        <h4>{props.nombre} {props.apellido}</h4>
        <ul>
            <li>Cadena: {props.cadena}</li>
            <li>Número: {props.numero}</li>
            <li>Boleano: {props.bolean ? 'verdadero' : 'falso'}</li>
            <li>Arreglo: {props.arreglo.join(', ')}</li>
            <li>Objeto: {props.objeto.nombre+' - '+props.objeto.correo}</li>
            <li>Función: {props.arreglo.map(props.funcion).join(', ')}</li>
            <li>ElementoReact: {props.elementoReact}</li>
            <li>ComponenteReact: {props.componenteReact}</li>
        </ul>
    </div>
  )
}

PropiedadesFuncional.defaultProps = {
    porDefecto:'Las Props',
    nombre:'Tommy',
    apellido:'Torres'
}

PropiedadesFuncional.propTypes = {
    numero: PropTypes.number.isRequired
}

export default PropiedadesFuncional