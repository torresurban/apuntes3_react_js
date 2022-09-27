import React, { Component } from 'react'

//Proporties initializers
export class EventoES7 extends Component {
  //Esto es un ejemplo o forma de como inicializar
  // static propTypes = {initialCount: React.PropTypes.number}
  // static defaultProps = {initialCount:0}
  // state = {count:this.props.initialCount}
  state = {
    contador: 0,
    incremento: 1
  };

  //Nuestro eventos(sumar--restar) dentro de la clase vamos a definir con Arrow Function
  //como estoy en un componente de clase los funciones o eventos no reciben(var, let, const)
  sumar = (e) => {
    console.log("Sumando");
    console.log(this);
    this.setState({
      contador: this.state.contador + parseInt(this.state.incremento, 0)
    });
  };

  restar = (e) => {
    console.log("Restando");
    console.log(this);
    this.setState({
      contador: this.state.contador - parseInt(this.state.incremento, 0)
    });
  };

  onChange2 = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    const valor = e.target.value;
    this.setState({
      incremento: valor
    });
  };
    render() {
        return (
            <div>
        <h1>Eventos en Componentes de Clase ES7</h1>
        <label htmlFor='numero'>Ingrese un número</label>
        <input
          type="number"
          id='numero'
          onChange={this.onChange2}
          value={this.state.incremento}
          placeholder="valor a incrementar"
        />
        <hr />

        <nav>
          <button onClick={this.restar}>-</button>
          <button onClick={this.sumar}>+</button>
          <Boton myOnClick={this.sumar}>Bella</Boton>
        </nav>
        <h3>{this.state.contador}</h3>
      </div>
        )
    }
}

function Boton(props) {
    console.log(props);
    console.log(props.children);
    console.log(props.myOnClick);
    return (
      <div>
        <button onClick={props.myOnClick}>{props.children}</button>
        {/* <button onClick={props.onClick}>{props.children}</button> */}
      </div>
    );
  }
