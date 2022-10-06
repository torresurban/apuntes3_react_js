import React, { useState, useEffect } from 'react'
import '../../../css/App00016zCargarActor.css'

const Ficha = (props) => {
    const [personaje, setPersonaje] = useState({})

    useEffect(() => {
        const seleccionPersonaje = async () => {
            const personajeSeleccionado = await cargarPersonsaje2(props.id)
            setPersonaje(personajeSeleccionado[0])
        }
        seleccionPersonaje()
    }, [props.id])
    

    const cargarPersonsaje2 = async (id) => {
        try {
            const data = await fetch(`https://breakingbadapi.com/api/characters/${id}`)
            const respuesta = await data.json()
            //console.log(respuesta)
            return respuesta
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='personajeContenedor'>
        <h3>{personaje.name}</h3>
        <div>{personaje.category}</div>
        <img src={personaje.img} alt=''/>
        <div>interpretador por: {personaje.portrayed}</div>
    </div>
  )
}

export default Ficha