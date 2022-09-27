import React, { Component } from 'react'

export default class EventoES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contador: 0 
        };
    
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
      }
    
      //Aca se puede apreciar que el 'this' no esta definido en una funcion tradicional
      /* sumar() {
        console.log("Sumando");
        console.log(this);
      } */
    
      //Una Funcion tradicional no da resultados porque falta definir el 'this'
      //Para ello previamente en el constructor 'this.sumar' lo bindeamos o enlazamos
      //con el 'this' --->this.sumar = this.sumar.bind(this)
      sumar(e) {
        console.log("Sumando");
        console.log(this);
        this.setState({
          contador: this.state.contador + 1
        });
      } 
    
      //Una Funcion como una Arrow Function funciona de manera normal
      /* sumar = () => {
        console.log("Sumando");
        console.log(this);
        this.setState({
          contador: this.state.contador + 1
        });
      }; */
    
      restar(e) {
        console.log("Restando");
        console.log(this);
        this.setState({
          contador: this.state.contador - 1
        });
      }
  render() {
    return (
        <div>
        <h1>Eventos en Componentes de Clase</h1>

        <nav>
          <button onClick={this.restar}>-</button>
          <button onClick={this.sumar}>+</button>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
    )
  }
}
