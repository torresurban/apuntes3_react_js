import React, { useState } from 'react'
import '../App.css'
import '../css/App16.css'
import Opcion from '../folders/00016React/piedraPapelTijera/Opcion'
import Resultado from '../folders/00016React/piedraPapelTijera/Resultado'

const App00016piedra = () => {

    const [jugador, setJugador] = useState('')
    const [maquina, setMaquina] = useState('')

    const opciones = [
        {
            eleccion:'piedra',
            derrota:'tijera'
        },
        {
            eleccion:'papel',
            derrota:'piedra'
        },
        {
            eleccion:'tijera',
            derrota:'papel'
        }
    ]

    const elegirOpcion = (e) => {
        const jugador2 = opciones.find(dato => dato.eleccion === e.target.textContent)
        console.log(e.target)
        //setJugador(e.target.textContent)
        setJugador(jugador2)
        eleccionRival()
    }

    const eleccionRival = () => {
        const eleccion2 = opciones[Math.floor(Math.random() * opciones.length)]

        setMaquina(eleccion2)
    }

  return (
    <div className='App'>
        <Resultado jugador={jugador} maquina={maquina} />
        <main>
            <section>
                <div className='jugador'>Jugador</div>
                <div className='eleccion'>{jugador.eleccion}</div>
            </section>
            <section>
                <div className='maquina'>Máquina</div>
                <div className='eleccion'>{maquina.eleccion}</div>
            </section>
        </main>
        <div className='opciones'>
            {
                opciones.map((e, index) => <Opcion
                                                key={index}
                                                valor={e}
                                                elegir={elegirOpcion}
                                            />)
            }
        </div>
    </div>
  )
}

export default App00016piedra



/* <div className='opciones'>
            {
                opciones.map((e, index) => <Opcion
                                                key={index}
                                                valor={opciones[index]}
                                                elegir={elegirOpcion}
                                            />)
            }
</div> */