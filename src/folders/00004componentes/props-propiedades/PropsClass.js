import React, { Component } from 'react'

export default class PropsClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre:this.props.nombre || 'Samira',
            apellido:this.props.apellido,
            correo:'samira@osa.com',
            edad:36,
            pais:'Peru',
            ciudad:'Lima'
        }
    }

getDate = () => {
    const { pais, ciudad} = this.state
    return pais + '-' + ciudad
}
  render() {
    const { correo, edad } = this.state
    return (
      <div>
        <h2>PropsClass</h2>
        <p>Bienvenido a un componente de Clase {this.state.nombre} {this.props.apellido}</p>
        <br />
        <p>Su correo es {correo} y la edad actual es {edad} años</p>
        <p>Vive en {this.getDate()}</p>
      </div>
    )
  }
}

PropsClass.defaultProps = {
    nombre:'Tommy',
    apellido:'Torres'
}
