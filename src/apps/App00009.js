import React from 'react'
import EventoES6 from '../folders/00009eventos-Bindind/EventoES6'
import { EventoES7 } from '../folders/00009eventos-Bindind/EventoES7'
import EventosNativos from '../folders/00009eventos-Bindind/EventosNativos'

const App00009 = () => {
  return (
    <div>
        <h1>Evento & Binding</h1>
        <hr />
        <EventoES6 />
        <hr />
        <h2>Eventos & Property Initialzers ES7</h2>
        <EventoES7 />
        <hr />
        <h2>Eventos Nativos, Sintéticos & Personalizados</h2>
        <EventosNativos />
    </div>
  )
}

export default App00009