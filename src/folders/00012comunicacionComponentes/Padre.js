import { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0
  };

  incrementaContador = (e) => {
    this.setState({
      contador: this.state.contador + 1
    });
  };

  render() {
    return (
      <>
        <h2>Comunicacion entre Componentes</h2>
        <p>
          <b> contador: {this.state.contador}</b>
        </p>
        <Hijo
          incrementaContador={this.incrementaContador}
          mensaje={"Mensaje para el hijo 1"}
        />
        <hr />
        <Hijo
          incrementaContador={this.incrementaContador}
          mensaje={"Mensaje para el hijo 2"}
        />
      </>
    );
  }
}

function Hijo(props) {
  return (
    <div>
      <h3>{props.mensaje}</h3>

      <button onClick={props.incrementaContador}> + </button>
    </div>
  );
}