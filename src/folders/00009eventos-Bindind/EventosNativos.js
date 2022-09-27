import React, { Component } from 'react'

// function Boton(props) {
//     console.log(props);
//     console.log(props.children);
//     return (
//       <div>
//         <button onClick={props.myOnClick}>{props.children}</button>
//         {/* <button onClick={props.onClick}>{props.children}</button> */}
//       </div>
//     );
//   }

// const Boton = (props) => (
//     <button onClick={props.myOnClick}>{props.children}</button>
// )

const Boton = ({myOnClick, children}) => (
    <button onClick={myOnClick}>{children}</button>
)

export default class EventosNativos extends Component {
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(e.target.innerHTML);
        console.log(mensaje);
      };
    render() {
        return (
            <div>
        <h2>Mas Sobre Eventos Personalizados</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando un evento desde un evento")
          }
        >
          Saludar
        </button>
        <hr />

        {/* Asi como tal este componente Boton no funciona ya que 
        el onClick es un atributo de la etiqueta button y no de un 
        componente */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola pasando un evento desde un evento")
          }
        /> */}

        {/* Para que funciones se le agrega las props
        para no confundirnos lo onClick por myOnClick este atributo
        lo pasamos por props al componente Boton para luego 
        asignarlo al atributo button de jsx */}

        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando un evento desde un evento")
          }
        >
          Componenete Personalizado
        </Boton>
        <Boton>Hola</Boton>
        <Boton>Chao</Boton>
      </div>
        )
    }
}
