import React, { Component } from 'react'
import data from '../help/data.json'

function ElementoLista(props){
    return(
        <li>
            <a href={props.el.web} target='_blank' rel="noreferrer">
                {props.el.name}
            </a>
        </li>
    )
}

export default class RenderizadoElemento extends Component {
    constructor(props){
        super(props);
        this.state = {
            seasons:['Primavera', 'Verano', 'Otoño', 'Invierno']
        }
    }
  render() {
    return (
      <div>
        <h2>RenderizadoElemento</h2>
        <h3>Estaciones del Año</h3>
        <ol>
            {this.state.seasons.map(el => (
                <li key={el}>{el}</li>
            ))}
        </ol>
        <h3>Framewors FrontEnd</h3>
        <ul>
            {data.frameworks.map(el => (
                <ElementoLista key={el.id} el={el}/>
            ))}
        </ul>
      </div>
    )
  }
}
