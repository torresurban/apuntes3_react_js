import React, { Component } from 'react'

export default class EstadoClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            contador:0
        }

        setInterval(() => {
            this.setState({
                contador:this.state.contador + 1
            })
        },1000)
    }
  render() {
    return (
      <div>
        <h2>EstadoClass</h2>
        <h3>{this.state.contador}</h3>
        <hr />
        <EstadoHijo contadorHijo={this.state.contador}/>
      </div>
    )
  }
}

const EstadoHijo = (props) => {
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}
