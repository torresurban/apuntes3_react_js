import React, { Component } from 'react'

class Reloj extends Component {
  
    componentWillUnmount() {
      console.log(3, "el componente ha sido eliminado del DOM");
    }
  
    render() {
      return (
        <div>
          <h3>{this.props.hora}</h3>
        </div>
      );
    }
  }

export default class CicloDeVida extends Component {
    constructor(props) {
        super(props);
        console.log(0, "El componente se inicializa, aún No esta en el DOM");
    
        this.state = {
          hora: new Date().toLocaleTimeString(),
          visible: false
        };
    
        this.temporizador = null;
      }
    
      componentDidMount() {
        console.log(1, "El componente ya se encuentra en el DOM");
      }
    
      componentDidUpdate(prevProps, prevState) {
        console.log(2, "El estado o las props del componente han cambiando");
        console.log(prevProps);
        console.log(prevState);
      }
    
      tictak = () => {
        this.temporizador = setInterval(() => {
          this.setState({
            hora: new Date().toLocaleTimeString()
          });
        }, 1000);
      };
    
      iniciar = () => {
        this.tictak();
        this.setState({
          visible: true
        });
      };
    
      detener = () => {
        clearInterval(this.temporizador);
        this.setState({
          visible: false
        });
      };
    render() {
        console.log(4, 'El componente se dibuja(o redibuja por algun cambio) en el DOM')
        return (
            <div>
        <h1>Ciclo de Vida de un Componente</h1>
        {this.state.visible && <Reloj hora={this.state.hora} />}
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
      </div>
        )
    }
}
