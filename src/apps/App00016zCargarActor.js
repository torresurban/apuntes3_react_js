import {  useState } from "react"
import Ficha from "../folders/00016React/cargarActor/Ficha"
import Personajes from "../folders/00016React/cargarActor/Personajes"
import '../css/App00016zCargarActor.css'

const App = () => {
    const [personajeId, setPersonajeId] = useState('')
    console.log(personajeId)

    

    const seleccionarPersonsaje = (id) => {
        setPersonajeId(id);
        console.log(personajeId)
    }


    return(
        <div className="app">
            <h1>Lista de Actores</h1>
            <hr />
            <Personajes seleccionar={seleccionarPersonsaje}/>
            <hr />
            <Ficha id={personajeId}/>
        </div>
    )
}

export default App