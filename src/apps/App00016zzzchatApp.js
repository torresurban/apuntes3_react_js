import React, { useState } from 'react'
import Chat from '../folders/00016React/chatApp/Chat'

const App00016zzzchatApp = () => {
  const [nombre, setNombre] = useState('')
  const [registrado, setRegistrado] = useState(false)

  const registrar = (e) => {
    e.preventDefault()
    if(nombre !== ''){
      setRegistrado(true)
    }
  }
  
  return (
    <div>
      {
        /*Si 'registrado' es falso entonces el form aparecerá  */
        !registrado && (
          <form onSubmit={registrar}>
            <label htmlFor='nombre'>Ingrese su nombre</label>
            <input type='text' id='nombre' value={nombre} onChange={e => setNombre(e.target.value)}/>
            <button>Ir al chat</button>
          </form>
        )
      }

      {registrado && (<Chat nombre={nombre}/>)}
    </div>
  )
}

export default App00016zzzchatApp