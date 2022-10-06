import React, { useEffect, useState } from 'react'

const Personajes = (props) => {
    const [listaPersonajes, setListaPersonajes] = useState([])
    console.log(listaPersonajes)
    const cargarPersonajes = async () => {
        try {
            const resp = await fetch('https://breakingbadapi.com/api/characters')
            const data = await resp.json()
            //console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        //Declaramos las funcion asincrona para cargar nuestros estados
        const cargarDatos = async () => {
            const personajes = await cargarPersonajes()
            //console.log(personajes)
            setListaPersonajes(personajes)
        }
        cargarDatos()
    },[])

    console.log(listaPersonajes)

    const seleccionarLista = (e) => {
        console.log(e.target.value)
        props.seleccionar(e.target.value)
    }


  return (
    <div>
        <h2>Breaking Bad Api</h2>
        <div>
            <select onChange={seleccionarLista}>
                {
                    listaPersonajes.map(e => <option key={e.char_id} value={e.char_id}>{e.name}</option>)
                }
            </select>
        </div>
    </div>
  )
}

export default Personajes